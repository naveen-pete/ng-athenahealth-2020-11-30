import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // custom event (button click)
  @Output() addProduct = new EventEmitter<ProductModel>();

  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.product.id = Date.now().toString();

    this.addProduct.emit(this.product);

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

}
