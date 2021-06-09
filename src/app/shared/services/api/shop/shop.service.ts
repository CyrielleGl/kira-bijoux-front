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

  getShoppingCartById(id: number): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlShop}/` + id);
  }

  getShoppingCartByUser(userAddressId: number): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlShop}/user-address/` + userAddressId);
  }

  postItemToShoppingCart(formData: any): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlShop}`, formData);
  }

  putItemToShoppingCart(itemId: number, orderId: number, formData: any): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlShop}/${itemId}/${orderId}`, formData);
  }

  deleteItemToShoppingCart(itemId: number, orderId: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlShop}/${itemId}/${orderId}`);
  }
}
