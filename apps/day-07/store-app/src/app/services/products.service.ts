import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {
  apiUrl = 'https://store-app-project-6f12d-default-rtdb.firebaseio.com/products';
  updateProducts = new Subject<ProductModel[]>();

  private products: ProductModel[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get(`${this.apiUrl}.json`).pipe(
      map((responseData: any) => {
        if (!responseData) {
          return [];
        }

        const products: ProductModel[] = [];
        const keys = Object.keys(responseData);
        keys.forEach((key) => {
          const product: ProductModel = {
            ...responseData[key],
            id: key
          };
          products.push(product);
        })
        return products;
      }),
      tap((products: ProductModel[]) => {
        this.products = [...products];
      })
    );
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}.json`)
      .pipe(
        map((responseData: any) => {
          const product: ProductModel = {
            ...responseData,
            id: id
          }
          return product;
        })
      );
  }

  addProduct(product: ProductModel): Observable<any> {
    return this.http.post(`${this.apiUrl}.json`, product).pipe(
      tap((responseData: any) => {
        const newProduct: ProductModel = {
          ...product,
          id: responseData.name
        };

        this.products = [...this.products, newProduct];

        this.updateProducts.next(this.products);
      })
    );
  }

  updateProduct(id: string, product: ProductModel) {
    const updatedProduct = { ...product, id: id };
    this.products = this.products.map(
      p => p.id === id ? updatedProduct : p
    );
    this.updateProducts.next(this.products);
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(p => p.id !== id);
    this.updateProducts.next([...this.products]);
  }
}