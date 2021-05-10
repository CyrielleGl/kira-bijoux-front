import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ButtonViewComponent } from 'src/app/shared/components/button-view/button-view.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IOrder, Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { formatDateToWeb } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.scss']
})
export class GestionCommandesComponent implements OnInit {

  settings: any;
  source: any[] = [];

  user: User | null = null;
  orders: Order[] | any = null;

  constructor(
    private cookieService: SecuService,
    private modalService: NgbModal,
    private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
    this.initTableSettings();
    this.initDataSource();
  }

  initTableSettings(): void {
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
        commande: {
          title: 'N° de commande',
          filter: false,
          sort: true
        },
        date: {
          title: 'Date',
          filter: false,
          sort: true
        },
        statut: {
          title: 'Statut',
          filter: false,
          sort: true
        },
        prix: {
          title: 'Total TTC',
          filter: false,
          sort: true
        },
        button: {
          title: '',
          type: 'custom',
          filter: false,
          width: '20px',
          valuePrepareFonction: (value: any, row: any, cell: any) => {
            return {
              icon: faEye,
              animation: 'pulse',
              tooltip: 'Voir le détail',
              placement: 'top'
            };
          },
          renderComponent: ButtonViewComponent,
          onComponentInitFunction: (instance: any) => {
            instance.view.subscribe((row: any) => {
              this.openOrderCardDialog(row);
            });
          }
        }
      }
    };
  }

  initDataSource(): void {
    // tslint:disable-next-line: deprecation
    this.ordersService.getAllOrders().subscribe((data: IOrder[]) => {
      this.orders = data;
      if (this.orders.length > 0) {
        this.orders.map((order: Order) => {
          const obj =
            {
              order,
              commande: order.id,
              date: formatDateToWeb(order.inserted_at, 'dd/MM/yyyy'),
              statut: order.status?.name,
              prix: order.price + ' €'
            };
          this.source.push(obj);
        });
      }
    });
  }

  openOrderCardDialog(row: any): void {
    const modalRef = this.modalService.open(OrderDetailsComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.commande = row;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }


}
