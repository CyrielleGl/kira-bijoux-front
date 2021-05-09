import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address, IAddress } from 'src/app/shared/models/address.model';
import { IOrder, Order, OrderItems } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  commande: any = {};
  settings: any;
  source: any[] = [];
  orderId = 0;
  orderItems: OrderItems[] | any = [];
  order: Order | null = null;
  itemPrice: number | any;
  itemTva: number | any;
  load = false;
  orderAddress: Address | any = null;
  user: User | any = null;

  constructor(
    public activeModal: NgbActiveModal,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.initSettings();
    if (this.commande) {
      this.orderId = this.commande.order.id;
      this.getOrderByOrderId();
    }
  }

  initSettings(): void {
    this.settings = {
      actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right'
      },
      pager: {
        perPage: 10
      },
      columns: {
        description: {
          title: 'Bijoux',
          filter: false,
          sort: true
        },
        totalTtc: {
          title: 'Total TTC',
          filter: false,
          sort: true
        },
        quantity: {
          title: 'Quantité',
          filter: false,
          sort: true
        }
      }
    };
  }

  getOrderByOrderId(): void {
    this.ordersService.getOrderByOrderId(this.orderId).subscribe((data: IOrder) => {
      this.order = data;
      this.getOrderItems(this.order.id);
      this.orderAddress = this.order?.user_address;
      this.user = this.orderAddress?.user;
      console.warn(this.order);
      console.warn(this.user);
    });
  }

  getOrderItems(orderId: number): void {
    this.ordersService.getOrderItems(orderId).subscribe((data: any) => {
      this.orderItems = data;
      if (this.orderItems.length > 0) {
         this.orderItems.map((i: OrderItems) => {
          const obj =
            {
              description: i.item?.name,
              totalTtc: i.item?.price + ' €',
              quantity: i.quantity
            };
          this.source.push(obj);
          this.load = true;
        });
      }
    });
  }

  cancel(): void {
    this.activeModal.close();
  }

}
