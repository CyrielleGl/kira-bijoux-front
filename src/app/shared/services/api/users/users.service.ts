import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable, of, ReplaySubject } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private currentUser: User | null = null;
  private userState = new ReplaySubject<User | null>(1);
  private userCache$?: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  isAuthenticated(): boolean {
    return this.cookieService.get('kira-bijoux-id') !== '';
  }

  authenticate(identity: User | null): void {
    this.currentUser = identity;
    this.userState.next(this.currentUser);
  }

  getCurrentUserCookieId(): number {
    return parseInt((this.cookieService.get)('kira-bijoux-id'), 10);
  }

  identity(force?: boolean): Observable<User | null> {
    if (!this.userCache$ || force || this.isAuthenticated()) {
      this.userCache$ = this.getUser(this.getCurrentUserCookieId()).pipe(
        catchError(() => {
          return of(null);
        }),
        tap((user: User | null) => {
          this.authenticate(user);
        }),
        shareReplay()
      );
    }
    return this.userCache$;
  }

  getUserState(): Observable<User | null> {
    return this.userState.asObservable();
  }

  getAllUsers(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlUsers}`);
  }

  // USER //

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${ApiService.ApiUrlUsers}/` + id);
  }

  postUser(formData: string[]): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlUsers}`, formData);
  }

  putUser(id: number, formData: User): Observable<User> {
    return this.http.put<User>(`${ApiService.ApiUrlUsers}/` + id, formData);
  }

  deleteUser(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlUsers}/` + id);
  }

  // ADRESSES //

  postAdress(idUser: number, formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlUsers}/address/` + idUser, formData);
  }

  putAdress(idUser: number, idAdress: number, formData: any): Observable<any> {
    return this.http.put<any>(`${ApiService.ApiUrlUsers}/address/` + idUser + `/` + idAdress, formData);
  }

  deleteAdress(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlUsers}/address/` + id);
  }

}
