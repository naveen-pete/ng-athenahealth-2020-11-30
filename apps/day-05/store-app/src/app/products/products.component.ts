import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [
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

  constructor() { }

  ngOnInit(): void { }

  onAddProduct(newProduct: ProductModel) {
    this.products.unshift(newProduct);
  }

  onDeleteProduct(productId: string) {
    const index = this.products.findIndex((p) => {
      return p.id === productId;
    });

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

}
