import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SecuService {
  constructor(private cookieService: CookieService, private router: Router) {}

  cookie = this.cookieService.get('kira-bijoux-cookie');

  verifyAccess(paramAccess: string): void {
    if (this.cookie !== paramAccess) {
      this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
        this.router.navigate(['home']);
        document.location.reload();
      });
    }
  }
}
