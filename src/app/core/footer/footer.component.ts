import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  yearNow: string | undefined;

  @Input()
  appTitle: string | undefined;

  private roleAccess = '';
  isActivateCookies = false;
  roleUser = false;
  roleAdmin = false;
  roleNotLogged = false;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (this.cookieService.get('kira-bijoux-cdd') == 'true') {
      this.isActivateCookies = true;
    }
    
    this.roleAccess = this.cookieService.get('kira-bijoux-cookie');
    this.displayByAccessRole(this.roleAccess);
  }
  
  activateCookies(): void {
    this.cookieService.set('kira-bijoux-cdd', 'true', 365);
    location.reload();
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

}
