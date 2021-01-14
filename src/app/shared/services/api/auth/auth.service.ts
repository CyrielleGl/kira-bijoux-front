import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private registrationRoute: string = "registration";
  private connexionRoute: string = "connexion";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  registration(formData: string[]): Observable<string[]> {
    return this.http.post<string[]>(
      `${ApiService.ApiUrlAuth}/${this.registrationRoute}`,
      formData
    );
  }

  connexion(formData: string[]): Observable<string[]> {
    return this.http.post<string[]>(
      `${ApiService.ApiUrlAuth}/${this.connexionRoute}`,
      formData
    );
  }
}
