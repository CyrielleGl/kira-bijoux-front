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

  commande: any;
  settings: any;
  source: any;
  orderItems: OrderItems[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.initSettings();
    this.getOrderItems();
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

  getOrderItems(): void {
    // tslint:disable-next-line: deprecation
    this.ordersService.getOrderItems(this.commande.order.id).subscribe((data: IOrderItems[]) => {
      this.orderItems = data;
      console.warn(this.orderItems);
      if (this.orderItems.length > 0) {
        this.orderItems.forEach((item: any) => {
          this.source = [
            {
              description: '',
              totalHt: '',
              quantity: '',
              tva: '',
              totalTtc: ''
            },
          ];
        });
      }
    });
  }

  cancel(): void {
    this.activeModal.close();
  }

}
