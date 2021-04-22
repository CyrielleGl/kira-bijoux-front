import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }

  postAdress(idUser: number, formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlAddress}/` + idUser, formData);
  }

  putAdress(idUser: number, idAdress: number, formData: any): Observable<any> {
    return this.http.put<any>(`${ApiService.ApiUrlAddress}/` + idUser + `/` + idAdress, formData);
  }

  deleteAdress(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlAddress}/` + id);
  }

}
