import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  getAllUsers(): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlUsers}`);
  }

  getUser(id: number): Observable<string[]> {
    return this.http.get<string[]>(`${ApiService.ApiUrlUsers}/` + id);
  }

  postUser(formData: string[]): Observable<string[]> {
    return this.http.post<string[]>(`${ApiService.ApiUrlUsers}`, formData);
  }

  putUser(id: number, formData: string[]): Observable<string[]> {
    return this.http.put<string[]>(`${ApiService.ApiUrlUsers}/` + id, formData);
  }

  deleteUser(id: number): Observable<string[]> {
    return this.http.delete<string[]>(`${ApiService.ApiUrlUsers}/` + id);
  }
}
