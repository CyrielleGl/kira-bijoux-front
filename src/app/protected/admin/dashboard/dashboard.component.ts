import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';
import { OrdersService } from 'src/app/shared/services/api/orders/orders.service';
import { ItemsService } from 'src/app/shared/services/api/items/items.service';

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
  cancelledItems: string[] | any;

  constructor(
    private cookieService: SecuService,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private itemsService: ItemsService
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
        this.chiffreAffaires = this.orders.reduce((sum: number, o: Order | any) => sum + o.price, 0) + ' €';
        console.warn(this.orders);
        this.orders.map((order: Order) => {
          if (order.status?.id === 4) {
            const obj = {
              name: order.reference,
              value: order.status
            };
            this.cancelledItems.push(obj);
            console.warn(this.cancelledItems);
          }
        });
      } else {
        this.chiffreAffaires = 'N/A';
      }
    });
  }

  getAllItems(): void {
    this.itemsService.getAllItems().subscribe((data: any) => {
      this.items = data;
    });
  }

}
