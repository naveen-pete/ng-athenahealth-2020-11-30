import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName: string = 'iPhone 12';   // should come from the server
  productPrice: number = 100000;

  constructor() {
    // this.productName = 'Samsung Galaxy 10';
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Product data saved..');
  }

  onSearch(event) {
    console.log('event:', event.target.value);

    // var searchText = event.target.value;
    // issue http/ajax request to the backend, pass searchText to the server as a parameter
  }

}
