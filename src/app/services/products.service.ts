import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAllProductsResponse } from './types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = 'https://dummyjson.com';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<GetAllProductsResponse>(
      `${this.apiUrl}/products`
    );
  }
}
