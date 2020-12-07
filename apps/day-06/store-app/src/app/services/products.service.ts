import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {
  updateProducts = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
    {
      id: '10',
      name: 'iPhone 12',
      description: 'Smart phone from Apple',
      price: 120000,
      isAvailable: true
    },
    {
      id: '20',
      name: 'Samsung Galaxy 10',
      description: 'Smart phone from Samsung',
      price: 80000,
      isAvailable: false
    },
    {
      id: '30',
      name: 'Google Pixel 4',
      description: 'Smart phone from Google',
      price: 75000,
      isAvailable: true
    }
  ];

  getAllProducts() {
    // return this.products.slice();
    return [...this.products];
  }

  addProduct(product: ProductModel) {
    product.id = Date.now().toString();
    this.products.unshift(product);
    this.updateProducts.next([...this.products]);
  }

  deleteProduct(id: string) {
    // const index = this.products.findIndex((p) => {
    //   return p.id === id;
    // });

    // if (index >= 0) {
    //   this.products.splice(index, 1);
    //   this.updateProducts.next([...this.products]);
    // }

    this.products = this.products.filter(p => p.id !== id);
    this.updateProducts.next([...this.products]);
  }
}
