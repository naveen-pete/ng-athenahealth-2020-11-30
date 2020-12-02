import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productId: number = 10;
  productName: string = 'iPhone 12';   // should come from the server
  productDescription: string = 'Smart phone from Apple';
  productPrice: number = 100000;
  productIsAvailable: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
