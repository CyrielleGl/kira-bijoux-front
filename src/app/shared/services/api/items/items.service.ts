import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Items, Materials } from 'src/app/shared/models/item.model';

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

  getItemById(itemId: number): Observable<any> {
    return this.http.get<any>(`${ApiService.ApiUrlItems}/` + itemId);
  }

  addItem(Form: any): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlItems}/`, Form);
  }

  saveItem(id: number, Form: any): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlItems}/` + id, Form);
  }

  deleteItem(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlItems}/` + id);
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

  getAllMaterials(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlMaterials}`);
  }

  postMaterial(formData: any): Observable<any> {
    return this.http.post<any>(`${ApiService.ApiUrlMaterials}/`, formData);
  }

  getAllTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlItemTypes}`);
  }

}
