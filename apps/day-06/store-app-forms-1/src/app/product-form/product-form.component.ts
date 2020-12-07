import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('productForm') form: NgForm;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    // service.getProduct(id);
    // this.product.name = 'iPhone';
    // this.product.description = 'A smart phone from Apple';
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Invalid form.');
      return;
    }

    console.log('Form submitted..');
    console.log('form:', this.form.value);

    const newProduct = {
      ...this.form.value,
      // price: parseInt(this.form.value.price)
      price: +this.form.value.price
    };
    console.log('newProduct:', newProduct);
    this.service.addProduct(newProduct);

    this.form.reset();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000)

  }

}
