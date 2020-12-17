import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllUsers(): any {
    return this.http.get(`${ApiService.ApiUrlUsers}`);
  }

  getUser(id :any): any {
    return this.http.get(`${ApiService.ApiUrlUsers}/` + id);
  }

  postUser(formData: any): any {
    return this.http.post(`${ApiService.ApiUrlUsers}`, formData);
  }

  putUser(id: any, formData: any): any {
    return this.http.put(`${ApiService.ApiUrlUsers}/` + id, formData);
  }

  deleteUser(id: any): any {
    return this.http.delete(`${ApiService.ApiUrlUsers}/` + id);
  }
}
