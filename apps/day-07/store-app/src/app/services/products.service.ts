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
    return [...this.products];
  }

  getProduct(id: string) {
    const product = this.products.find((p) => {
      return p.id === id;
    });

    return product;
  }

  addProduct(product: ProductModel) {
    product.id = Date.now().toString();
    this.products.unshift(product);
    this.updateProducts.next([...this.products]);
  }

  updateProduct(id: string, product: ProductModel) {
    console.log('id:', id);
    const updatedProduct = { ...product, id: id };
    console.log('product', updatedProduct);
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
