import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registrationRoute = 'registration';
  private connexionRoute = 'connexion';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  registration(formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlAuth}/${this.registrationRoute}`, formData);
  }

  connexion(formData: string[]): Observable<void> {
    return this.http
    .post<User>(`${ApiService.ApiUrlAuth}/${this.connexionRoute}`, formData)
    .pipe(map( response => this.authenticationSuccess(response)));
  }

  private authenticationSuccess(user: User): void {
        if (user) {
          if (user.role?.role === 'user') {
            this.cookieService.set('kira-bijoux-cookie', 'user', 365);
          } else if (user.role?.role === 'admin') {
            this.cookieService.set('kira-bijoux-cookie', 'admin', 365);
          }
          this.cookieService.set('kira-bijoux-id', `${user.id}`, 365);
        }
  }
}
