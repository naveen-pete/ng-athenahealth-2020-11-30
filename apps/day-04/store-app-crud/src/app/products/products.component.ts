import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage: boolean = false;
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
    this.product.id = Date.now().toString();
    this.products.unshift(this.product);
    this.product = new ProductModel();
    this.showMessage = true;

    // var obj = this;

    // setTimeout(function () {
    //   obj.showMessage = false;
    // }, 5000)

    setTimeout(() => {
      this.showMessage = false;
    }, 5000)

  }

  onDelete(productId: string) {
    console.log('productId:', productId);
    console.log(this.products);
    if (confirm('Are you sure?')) {
      const index = this.products.findIndex((p) => {
        return p.id === productId;
      });

      // -1 - not found
      // 0, 1 - found

      console.log('index:', index);

      if (index >= 0) {
        this.products.splice(index, 1);
      }
    }
  }

}

class ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
