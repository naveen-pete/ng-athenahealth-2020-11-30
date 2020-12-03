import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: ProductModel = new ProductModel();

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

  onSubmit() {
    console.log('Form submitted.');
    console.log(this.product);
    this.products.push(this.product);
  }

}

class ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
