import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { IOrder, IOrderItems, OrderItems } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders(idUser: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${ApiService.ApiUrlOrders}/user/` + idUser);
  }

  getOrderById(idOrder: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrders}/` + idOrder);
  }

  getOrderItems(idOrder: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrderItems}/order/` + idOrder);
  }

}
