import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { IOrderItems, OrderItems } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders(idUser: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrders}/user/` + idUser);
  }

  getOrderItems(idOrder: number): Observable<IOrderItems[]> {
    return this.http.get<IOrderItems[]>(`${ApiService.ApiUrlOrderItems}/` + idOrder);
  }

}
