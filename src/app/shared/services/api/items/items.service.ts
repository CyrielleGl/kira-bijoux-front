import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Items } from 'src/app/shared/models/item.model';

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

  getAllItems(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItems}`);
  }

  getByCategory(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItems}/category/` + name);
  }

  getByName(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItems}/category/item/` + name);
  }

  getPictureById(id: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlPictures}/` + id);
  }
}
