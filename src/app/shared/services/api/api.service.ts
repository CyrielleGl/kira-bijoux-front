import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public static readonly ApiUrlUsers: string = 'http://localhost:4000/api/users';
}
