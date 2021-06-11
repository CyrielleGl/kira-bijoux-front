import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { BOUTIQUE_BO_KEYWORD, BOUTIQUE_BRACELETS_KEYWORD, BOUTIQUE_COLLIERS_KEYWORD, BOUTIQUE_NOUVEAUTES_KEYWORD } from '../../app-constants';
import { OrdersService } from '../../services/api/orders/orders.service';
import { ShopService } from '../../services/api/shop/shop.service';
import { UsersService } from '../../services/api/users/users.service';
import { ItemsService } from './../../services/api/items/items.service';
import { AlertStockModalComponent } from './alert-stock-modal/alert-stock-modal.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  submitError = false;
  currentItem: any;
  stockVisibility = false;
  noMoreStock = false;
  category = '';
  keyWord = '';
  productPictures: any = [];
  BOUTIQUE_BO_KEYWORD = BOUTIQUE_BO_KEYWORD;
  BOUTIQUE_COLLIERS_KEYWORD = BOUTIQUE_COLLIERS_KEYWORD;
  BOUTIQUE_BRACELETS_KEYWORD = BOUTIQUE_BRACELETS_KEYWORD;
  BOUTIQUE_NOUVEAUTES_KEYWORD = BOUTIQUE_NOUVEAUTES_KEYWORD;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private modalService: NgbModal,
    private shopService: ShopService,
    private orderService: OrdersService,
    private usersService: UsersService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ nameItem }) => {
      if (nameItem !== null) {
        this.getItemByName(nameItem);
      }
    });
    this.activatedRoute.data.subscribe(({ keyWord }) => {
      this.keyWord = keyWord;
      if (keyWord === BOUTIQUE_COLLIERS_KEYWORD) {
        this.category = 'Collier';
      }
      else if (keyWord === BOUTIQUE_BRACELETS_KEYWORD) {
        this.category = 'Bracelet';
      }
      else if (keyWord === BOUTIQUE_BO_KEYWORD) {
        this.category = 'Boucles d\'oreilles';
      }
    });
  }

  getItemByName(nameItem: string): any {
    this.itemsService.getByName(nameItem).subscribe(
      (data: string[]) => {
        this.currentItem = data[0];
        this.productPictures = this.currentItem.item_pictures;
        if (this.currentItem.stock <= 3 && this.currentItem.stock !== 0) {
          this.stockVisibility = true;
        }
        else if (this.currentItem.stock === 0) {
          this.noMoreStock = true;
          this.stockVisibility = false;
        }
      }
    );
  }

  openAlertStockDialog(): void {
    const modalRef = this.modalService.open(AlertStockModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.item = this.currentItem;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

  addToBasket(itemId: string, quantity: string, itemPrice: number): void {
    let idUser: number = parseInt(this.cookieService.get('kira-bijoux-id'), 10);

    const formOrderData = {
      order_status_id: 1,
      payment_type_id: 1,
      user_address_id: parseInt(this.cookieService.get('kira-bijoux-id'), 10),
      price: itemPrice,
    };

    const formShopData = {
      item_id: parseInt(itemId, 10),
      user_address_id: parseInt(this.cookieService.get('kira-bijoux-id'), 10),
      quantity: parseInt(quantity, 10),
    };

    this.orderService.getOrdersByUserId(idUser).subscribe((order) => {
      if (order.length == 0) {
        this.createOrder(formOrderData, formShopData);        
      } else if (order.length > 0) {
        if (order[0].status?.name != 'en attente') {
          this.orderService.putOrder(order[0].id, formOrderData).subscribe((order) => {
            this.postItemToShoppingCart(formShopData);
          });
        } else {
          this.postItemToShoppingCart(formShopData);
        }
      }
    }); 
  }

  private createOrder(formOrderData: any, formShopData: any): void {
    this.usersService.getUserState().subscribe((user) => { 
      let addressesLength: number = Number(user?.addresses?.length);
      if (addressesLength == 0) {
        alert('Veuillez renseigner une adresse');
      } else if (addressesLength > 0) {
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
        this.submitError = true; 
      }
    );
  }
}
