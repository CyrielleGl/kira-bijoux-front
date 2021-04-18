import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public static readonly BasicApiUrl: string = 'http://localhost:4000/api';
  public static readonly ApiUrlUsers: string = `${ApiService.BasicApiUrl}/users`;
  public static readonly ApiUrlAuth: string = `${ApiService.BasicApiUrl}/auth`;
  public static readonly ApiUrlItems: string = `${ApiService.BasicApiUrl}/items`;
  public static readonly ApiUrlShop: string = `${ApiService.BasicApiUrl}/shop`;
  public static readonly ApiUrlAddress: string = `${ApiService.BasicApiUrl}/address`;
}
