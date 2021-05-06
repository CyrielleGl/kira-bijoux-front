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
  roleUser = false;
  roleAdmin = false;
  roleNotLogged = false;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.roleAccess = this.cookieService.get('kira-bijoux-cookie');
    this.displayByAccessRole(this.roleAccess);
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
