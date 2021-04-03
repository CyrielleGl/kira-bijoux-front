import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllShoppingCart(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlShop}`);
  }

  getShoppingCartByUser(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlShop}/user/` + userId);
  }

  postItemToShoppingCart(formData: any): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlShop}`, formData);
  }

  putItemToShoppingCart(itemId: number, userId: number, formData: any): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlShop}/${itemId}/${userId}`, formData);
  }

  deleteItemToShoppingCart(itemId: number, userId: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlShop}/${itemId}/${userId}`);
  }
}
