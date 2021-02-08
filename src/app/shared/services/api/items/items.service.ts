import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getByCategory(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItems}/category/` + name);
  }

  getByName(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItems}/category/item/` + name);
  }
}
