import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const PRODUCT_BASE_URL = 'http://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  query(limit = '12', sort = 'desc', category?: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${PRODUCT_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${PRODUCT_BASE_URL}/products/categories`
    )
  }
}
