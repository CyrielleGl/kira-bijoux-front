import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { ShopService } from 'src/app/shared/services/api/shop/shop.service';
import { UsersService } from './../../shared/services/api/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private roleAccess = '';
  roleUser = false;
  roleAdmin = false;
  roleNotLogged = false;
  idUser = 0;
  shoppingCart: any;
  shoppingCartLength = 0;

  user: User | null = null;
  userSubscription?: Subscription;

  @Input()
  urlLogoHeader: string | undefined;

  constructor(
    private cookieService: CookieService,
    private shopService: ShopService,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.roleAccess = this.cookieService.get('kira-bijoux-cookie');
    this.displayByAccessRole(this.roleAccess);
    if (this.isAuthenticated()) {
      this.getShoppingCartByUser();
      this.usersService.getUserState().subscribe(user => {
        this.user = user;
      });
    }
  }

  private displayByAccessRole(roleAccess: string): void {
    if (this.roleAccess === 'user') {
      this.roleUser = true;
    } else if (this.roleAccess === 'admin') {
      this.roleAdmin = true;
    } else if (this.roleAccess === '') {
      this.roleNotLogged = true;
    }
  }

  getShoppingCartByUser(): void {
    this.idUser = parseInt(this.cookieService.get('kira-bijoux-id'), 10);
    this.shopService.getShoppingCartByUser(this.idUser).subscribe(
      (data: any[]) => {
        this.shoppingCart = data;
        this.shoppingCartLength = this.shoppingCart.length;
      }
    );
  }

  isAuthenticated(): boolean {
    return this.usersService.isAuthenticated();
  }

  logout(): void {
    this.cookieService.delete('kira-bijoux-cookie');
    this.cookieService.delete('kira-bijoux-id');
    this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
      this.router.navigate(['home']);
      document.location.reload();
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
