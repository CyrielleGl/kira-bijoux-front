import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ShopService } from 'src/app/shared/services/api/shop/shop.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  submitError = false;
  shoppingCart: any;
  idUser = 0;
  arrayPrice: any = [];
  subTotalPrice: any = 0;
  totalPrice: any = 0;

  constructor(
    private shopService: ShopService,
    private cookieService: CookieService,
    private router: Router,
    private secuService: SecuService
  ) { }

  ngOnInit(): void {
    this.secuService.redirectAdminAccess();
    this.getShoppingCartByUser();
  }

  getShoppingCartByUser(): void {
    this.idUser = parseInt(this.cookieService.get('kira-bijoux-id'), 10);
    this.shopService.getShoppingCartByUser(this.idUser).subscribe(
      (data: any[]) => {
        this.shoppingCart = data;
        this.shoppingCart.map((res: any) => {
          if (res.quantity === 1) {
            this.subTotalPrice += res.item.price;
          }
          else if (res.quantity > 1) {
            this.subTotalPrice += res.item.price * res.quantity;
          }
        });
        this.totalPrice = this.subTotalPrice + 6.90;
      }
    );
  }

  putItemToShoppingCart(itemId: number, quantity: string): void {
    const formData = {
      quantity: parseInt(quantity, 10)
    };
    this.shopService.putItemToShoppingCart(itemId, formData).subscribe(
      (data: any[]) => { document.location.reload(); },
      err => { this.submitError = true; }
    );
  }

  deleteItemToShoppingCart(itemId: number): void {
    this.shopService.deleteItemToShoppingCart(itemId).subscribe(
      () => { document.location.reload(); }
    );
  }

  redirectToBoutique(): void {
    this.router.navigateByUrl('/boutique/colliers', { skipLocationChange: false }).then(() => {
      this.router.navigate(['boutique']);
      document.location.reload();
    });
  }

  onSubmitValidation(totalPrice: number): void {
    alert(`Vous me devez ${totalPrice} €`);
  }
}
