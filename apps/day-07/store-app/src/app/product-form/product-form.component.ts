import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: string;
  addNew = true;

  product: ProductModel = new ProductModel();
  @ViewChild('productForm') form: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      if (map.get('id')) {
        this.id = map.get('id');
        this.product = this.service.getProduct(this.id);

        if (this.product) {
          this.addNew = false;
        } else {
          this.product = new ProductModel();
        }
      }
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Invalid form.');
      return;
    }

    const newProduct = {
      ...this.form.value,
      // price: parseInt(this.form.value.price)
      price: +this.form.value.price
    };

    if (this.addNew) {
      this.service.addProduct(newProduct);
      // show products
      this.router.navigate(['/products']);
    } else {
      console.log('Call service.updateProduct() method.');
      // show product detail
      this.router.navigate(['/products', this.id]);
    }

  }

}
