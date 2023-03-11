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

  query(limit = '12', sort = 'desc'): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${PRODUCT_BASE_URL}/products?sort=${sort}&limit=${limit}`
    )
  }
}
