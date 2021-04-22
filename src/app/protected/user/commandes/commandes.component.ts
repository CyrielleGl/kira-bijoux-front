import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ButtonViewComponent } from 'src/app/shared/components/button-view/button-view.component';
import { IOrder, Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';
import { OrderCardDialogComponent } from './order-card-dialog/order-card-dialog.component';
import { formatDateToWeb } from 'src/app/shared/services/utils/utils.service';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  settings: any;

  source: any[] = [];

  user: User | null = null;
  shoppingCart: string[] | null = null;
  orders: IOrder[] | any = null;

  constructor(
    private cookieService: SecuService,
    private usersService: UsersService,
    private modalService: NgbModal,
    private ordersService: OrdersService
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
    if (this.isAuthenticated()) {
      // tslint:disable-next-line: deprecation
      this.usersService.getUserState().subscribe(user => {
        this.user = user;
        this.initDataSource(this.user);
      });
      this.initTableSettings();
    }
  }

  isAuthenticated(): boolean {
    return this.usersService.isAuthenticated();
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
          title: 'Passée le',
          filter: false,
          sort: true
        },
        dateEnvoi: {
          title: 'Envoyée le',
          filter: false,
          sort: true
        },
        statut: {
          title: 'Statut',
          filter: false,
          sort: true
        },
        prix: {
          title: 'Prix',
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

  initDataSource(user: any): void {
    // tslint:disable-next-line: deprecation
    this.ordersService.getOrders(user.id).subscribe((data: IOrder[]) => {
      this.orders = data;
      console.warn(this.orders);
      if (this.orders.length > 0) {
        this.orders.map((order: Order) => {
          const obj =
            {
              order,
              commande: order.id,
              date: formatDateToWeb(order.inserted_at, 'dd/MM/yyyy'),
              dateEnvoi: formatDateToWeb(order.send_at, 'dd/MM/yyyy'),
              statut: order.status?.name,
              prix: order.price + ' €'
            };
          this.source.push(obj);
        });
      }
    });
  }

  openOrderCardDialog(row: any): void {
    const modalRef = this.modalService.open(OrderCardDialogComponent, {
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
