import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }

  postAdress(formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlAddress}`, formData);
  }

  putAdress(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${ApiService.ApiUrlAddress}/` + id, formData);
  }

  deleteAdress(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlAddress}/` + id);
  }

}
