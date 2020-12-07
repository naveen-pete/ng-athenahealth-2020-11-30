import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Form submitted..');
    console.log('form:', form);


    // const newProduct = Object.assign({}, this.product);
    // const newProduct = { ...this.product };
    // this.service.addProduct(newProduct);

    // this.product = new ProductModel();
    // this.showMessage = true;

    // setTimeout(() => {
    //   this.showMessage = false;
    // }, 5000)

  }

}
