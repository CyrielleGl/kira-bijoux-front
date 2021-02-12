import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ShopService } from 'src/app/shared/services/api/shop/shop.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  shoppingCart: any;
  idUser = 0;
  arrayPrice: any = [];
  subTotalPrice: any = 0;
  totalPrice: any = 0;

  constructor(
    private shopService: ShopService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShoppingCartByUser();
  }

  getShoppingCartByUser(): void {
    this.idUser = parseInt(this.cookieService.get('kira-bijoux-id'));
    this.shopService.getShoppingCartByUser(this.idUser).subscribe(
      (data: any[]) => {
        this.shoppingCart = data;
        this.shoppingCart.map((res: any) => {
          if (res.quantity == 1) {
            this.subTotalPrice += res.item.price;
          }
          else if (res.quantity > 1) {
            this.subTotalPrice += res.item.price * res.quantity;
          }
        })
        this.totalPrice = this.subTotalPrice + 6.90;
      }
    );
  }

  putItemToShoppingCart(itemId: number, quantity: number): void {
    const formData = {
      quantity: quantity
    };
    this.shopService.putItemToShoppingCart(itemId, formData).subscribe(
      () => { document.location.reload(); }
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
    alert(`Vous me devez ${totalPrice} €`)
  }
}
