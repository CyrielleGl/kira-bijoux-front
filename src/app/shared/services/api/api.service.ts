import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public static readonly BasicApiUrl: string = 'http://localhost:4000';
  public static readonly ApiUrlUsers: string = `${ApiService.BasicApiUrl}/api/users`;
  public static readonly ApiUrlAuth: string = `${ApiService.BasicApiUrl}/api/auth`;
}
