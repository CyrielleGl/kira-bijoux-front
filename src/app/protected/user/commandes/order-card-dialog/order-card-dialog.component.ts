import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IItems, Items } from 'src/app/shared/models/item.model';
import { IOrder, IOrderItems, Order, OrderItems } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';
import { formatDateToWeb } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-order-card-dialog',
  templateUrl: './order-card-dialog.component.html',
  styleUrls: ['./order-card-dialog.component.scss']
})
export class OrderCardDialogComponent implements OnInit {

  commande: any = {};
  settings: any;
  source: any[] = [];
  orderId = 0;
  orderItems: OrderItems[] | any = [];
  order: Order | null = null;
  itemPrice: number | any;
  itemTva: number | any;
  load = false;

  constructor(
    public activeModal: NgbActiveModal,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.initSettings();
    if (this.commande) {
      this.orderId = this.commande.order.id;
      this.getOrderById();
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
          title: 'Description',
          filter: false,
          sort: true
        },
        totalHt: {
          title: 'Total HT',
          filter: false,
          sort: true
        },
        quantity: {
          title: 'Quantité',
          filter: false,
          sort: true
        },
        tva: {
          title: 'TVA',
          filter: false,
          sort: true
        },
        totalTtc: {
          title: 'Total TTC',
          filter: false,
          sort: true
        }
      }
    };
  }

  getOrderById(): void {
    this.ordersService.getOrderById(this.orderId).subscribe((data: Order) => {
      this.order = data;
      this.getOrderItems(this.order.id);
    });
  }

  getOrderItems(orderId: number): void {
    this.ordersService.getOrderItems(orderId).subscribe((data: any) => {
      this.orderItems = data;
      if (this.orderItems.length > 0) {
         this.orderItems.map((i: OrderItems) => {
          this.itemPrice = i.item?.price;
          this.itemTva = i.item?.tva;
          const obj =
            {
              description: i.item?.name,
              totalHt: Math.round(this.itemPrice - (this.itemPrice * this.itemTva)) + ' €',
              quantity: i.quantity,
              tva: Math.round(this.itemTva * 100) + ' %',
              totalTtc: i.item?.price + ' €'
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
