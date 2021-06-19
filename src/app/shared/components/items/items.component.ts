import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BOUTIQUE_BO_KEYWORD, BOUTIQUE_BRACELETS_KEYWORD, BOUTIQUE_COLLIERS_KEYWORD, BOUTIQUE_NOUVEAUTES_KEYWORD } from '../../app-constants';
import { ItemsService } from '../../services/api/items/items.service';
import { OrdersService } from '../../services/api/orders/orders.service';
import { ShopService } from '../../services/api/shop/shop.service';
import { UsersService } from '../../services/api/users/users.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input()
  cardData: any;

  item: any;
  category: any;
  name: any;
  keyWord = '';
  BOUTIQUE_BO_KEYWORD = BOUTIQUE_BO_KEYWORD;
  BOUTIQUE_COLLIERS_KEYWORD = BOUTIQUE_COLLIERS_KEYWORD;
  BOUTIQUE_BRACELETS_KEYWORD = BOUTIQUE_BRACELETS_KEYWORD;
  BOUTIQUE_NOUVEAUTES_KEYWORD = BOUTIQUE_NOUVEAUTES_KEYWORD;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private shopService: ShopService,
    private orderService: OrdersService,
    private usersService: UsersService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ keyWord }) => {
      this.keyWord = keyWord;
      this.getName(this.keyWord);
      this.getByCategory(this.name);
    });
  }

  getName(keyWord: string): any {
    if (keyWord === BOUTIQUE_COLLIERS_KEYWORD) {
      this.name = 'Collier';
    }
    else if (keyWord === BOUTIQUE_BRACELETS_KEYWORD) {
      this.name = 'Bracelet';
    }
    else if (keyWord === BOUTIQUE_BO_KEYWORD) {
      this.name = 'BO';
    }
  }

  getByCategory(name: string): any {
    this.itemsService.getByCategory(`${name}`).subscribe(
      (data: string[]) => {
        this.item = data;
      }
    );
  }

  onSearchItems(item: string): void {
    this.itemsService.getByName(`${item}`).subscribe(
      (data: string[]) => {
        this.item = data;
      }, err => {
        document.location.reload();
      }
    );
  }

  getByName(name: string): any {
    this.itemsService.getByName(`${name}`).subscribe(
      (data: string[]) => {
        this.item = data;
      }
    );
  }

  redirectToDetails(item: any): void {
    this.router.navigateByUrl('boutique/' + this.keyWord + '/' + item.name).then();
  }

  addToBasket(itemId: string, quantity: string): void {
    let idUser: number = parseInt(this.cookieService.get('kira-bijoux-id'), 10);
    let itemPrice: number = Math.floor(Math.random() * (1000 - 100) + 100) / 100;

    const formOrderData = {
      order_status_id: 1,
      payment_type_id: 1,
      user_address_id: parseInt(this.cookieService.get('kira-bijoux-id'), 10),
      price: itemPrice,
      received_at: '',
      send_at: '',
      reference: '',
    };

    const formShopData = {
      item_id: parseInt(itemId, 10),
      user_address_id: parseInt(this.cookieService.get('kira-bijoux-id'), 10),
      quantity: parseInt(quantity, 10),
    };

    let res: boolean = this.verifyAddresses();
    if (res) {
      this.orderService.getOrdersByUserId(idUser).subscribe((order) => {
        if (order.length > 0) {
          if (order[0].status?.name != 'en attente') {
            this.orderService.putOrder(order[0].id, formOrderData).subscribe((order) => {
              this.postItemToShoppingCart(formShopData);
            });
          } else {
            this.postItemToShoppingCart(formShopData);
          }
        }   
      }, err => { 
        this.createOrder(formOrderData, formShopData); 
      });   
    }
  }

  private verifyAddresses(): boolean {
    let res: boolean = true;
    this.usersService.getUserState().subscribe((user) => { 
      let addressesLength: number = Number(user?.addresses?.length);
      if (addressesLength == 0) {
        alert('Veuillez renseigner une adresse');
        res = false;
      }
    });
    return res;
  }

  private createOrder(formOrderData: any, formShopData: any): void {
    this.usersService.getUserState().subscribe((user) => { 
      let addressesLength: number = Number(user?.addresses?.length);
      if (addressesLength > 0) {
        this.orderService.postOrder(formOrderData).subscribe((order) => {
          this.postItemToShoppingCart(formShopData);
        });
      }
    });
  }

  private postItemToShoppingCart(formShopData: any): void {
    this.shopService.postItemToShoppingCart(formShopData).subscribe(
      (data: any[]) => { document.location.reload(); },
      err => {
        alert('La quantité saisi est incorrecte');
      }
    );
  }
}
