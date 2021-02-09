import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private roleAccess: string = '';
  public roleUser: boolean = false;
  public roleAdmin: boolean = false;
  public roleNotLogged: boolean = false;

  @Input()
  urlLogoHeader: string | undefined;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.roleAccess = this.cookieService.get('kira-bijoux-cookie');
    this.displayByAccessRole(this.roleAccess);
  }

  private displayByAccessRole(roleAccess: string): void {
    if (this.roleAccess == 'user') {
      this.roleUser = true;
    } else if (this.roleAccess == 'admin') {
      this.roleAdmin = true;
    } else if (this.roleAccess == '') {
      this.roleNotLogged = true;
    }
  }

  public logout(): void {
    this.cookieService.delete('kira-bijoux-cookie');
    this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
      this.router.navigate(['home']);
      document.location.reload();
    });
  }
}