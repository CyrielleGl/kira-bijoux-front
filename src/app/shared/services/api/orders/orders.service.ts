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

  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${ApiService.ApiUrlOrders}`);
  }

  getOrdersByUserId(idUser: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${ApiService.ApiUrlOrders}/user/` + idUser);
  }

  getOrderByOrderId(idOrder: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrders}/` + idOrder);
  }

  getOrderItems(idOrder: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrderItems}/order/` + idOrder);
  }

  getAllOrderStatus(): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlOrderStatus}`);
  }

  updateOrderStatus(idOrder: number, orderStatus: any): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlOrderStatus}/` + idOrder, orderStatus);
  }

  postOrder(formData: any): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlOrders}`, formData);
  }

  putOrder(id: number, formData: any): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlOrders}/` + id, formData);
  }
}
