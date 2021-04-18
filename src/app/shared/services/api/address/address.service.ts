import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  putAdress(idUser: number, idAdress: number, formData: any): Observable<any> {
    return this.http.put<any>(`${ApiService.ApiUrlAddress}/` + idUser + `/` + idAdress, formData);
  }

  postAdress(idUser: number, formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlAddress}/` + idUser, formData);
  }

  deleteAdress(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlAddress}/` + id);
  }
}
