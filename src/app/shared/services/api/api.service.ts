import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public static readonly BasicApiUrl: string = 'http://localhost:4000/api';
  public static readonly ApiUrlUsers: string = `${ApiService.BasicApiUrl}/users`;
  public static readonly ApiUrlAddress: string = `${ApiService.BasicApiUrl}/address`;
  public static readonly ApiUrlAuth: string = `${ApiService.BasicApiUrl}/auth`;
  public static readonly ApiUrlItems: string = `${ApiService.BasicApiUrl}/items`;
  public static readonly ApiUrlPictures: string = `${ApiService.BasicApiUrl}/items/picture`;
  public static readonly ApiUrlItemTypes: string = `${ApiService.BasicApiUrl}/item-types`;
  public static readonly ApiUrlMaterials: string = `${ApiService.BasicApiUrl}/materials`;
  public static readonly ApiUrlShop: string = `${ApiService.BasicApiUrl}/shop`;
  public static readonly ApiUrlOrders: string = `${ApiService.BasicApiUrl}/orders`;
  public static readonly ApiUrlOrderItems: string = `${ApiService.BasicApiUrl}/order-items`;
}
