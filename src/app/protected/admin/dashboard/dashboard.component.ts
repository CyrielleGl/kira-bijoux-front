import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';
import { ItemsService } from 'src/app/shared/services/api/items/items.service';
import { addConsoleHandler } from 'selenium-webdriver/lib/logging';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard.component';
import { STATUT_EN_ATTENTE, STATUT_REMBOURSEE } from 'src/app/shared/app-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] | any = [];
  orders: Order[] | any = null;
  chiffreAffaires: string | any = null;
  items: string[] | any = null;
  validateOrders: [] | any = [];
  ordersToPrepare: [] | any = [];
  cancelledOrders: [] | any = [];
  unstockedItems: [] | any = [];
  stockedItems: [] | any = [];

  indicatorUsers = 'Utilisateurs inscrits';
  indicatorValidateOrder = 'Commmandes payées';
  indicatorCa = 'Chiffre d\'affaires';
  indicatorStockedProducts = 'Produits disponibles';
  indicatorCancelledOrders = 'Commandes annulées';
  indicatorUnstockedProducts = 'Produits à fabriquer';


  constructor(
    private cookieService: SecuService,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private itemsService: ItemsService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
    this.getAllUsers();
    this.getAllOrders();
    this.getAllItems();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((data: string[]): void => {
      this.users = data;
    });
  }

  getAllOrders(): void {
    this.ordersService.getAllOrders().subscribe((data: Order[]) => {
      this.orders = data;
      if (this.orders.length > 0) {
        this.orders.map((order: Order) => {
          if (order.status?.name === STATUT_REMBOURSEE) {
            const obj = {
              order,
              value: order.status
            };
            this.cancelledOrders.push(obj);
          } else if (order.status?.name !== STATUT_REMBOURSEE) {
            const okOrders = {
              order,
              value: order.status
            };
            this.validateOrders.push(okOrders);
            if (order.status?.name === STATUT_EN_ATTENTE) {
              const orderToPrepare = order;
              this.ordersToPrepare.push(orderToPrepare);
            }
          }
        });
        this.chiffreAffaires = this.validateOrders.reduce((sum: number, vO: any) => sum + vO.order.price, 0) + ' €';
      } else {
        this.chiffreAffaires = 'N/A';
      }
    });
  }

  getAllItems(): void {
    this.itemsService.getAllItems().subscribe((data: any) => {
      this.items = data;
      if (this.items.length > 0) {
        this.items.map((item: any) => {
          if (item.stock < 4) {
            const itToDo = item;
            this.unstockedItems.push(itToDo);
          } else {
            const it = item;
            this.stockedItems.push(it);
          }
        });
      }
    });
  }

  openIndicatorCardDialog(keyWord: any): void {
    const modalRef = this.modalService.open(ModalDashboardComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.keyWord = keyWord;
    modalRef.componentInstance.users = this.users;
    modalRef.componentInstance.cancelledOrders = this.cancelledOrders;
    modalRef.componentInstance.validateOrders = this.validateOrders;
    modalRef.componentInstance.unstockedItems = this.unstockedItems;
    modalRef.componentInstance.stockedItems = this.stockedItems;
    modalRef.componentInstance.chiffreAffaires = this.chiffreAffaires;
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
