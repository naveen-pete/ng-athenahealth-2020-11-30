import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

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
        this.service.getProduct(this.id).subscribe(
          (product) => {
            this.product = product;
            this.addNew = false;
          },
          (error) => {
            console.log('Get product failed.');
            console.log('Error:', error);
          }
        );
      }
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Invalid form.');
      return;
    }

    const { price, isAvailable } = this.form.value;

    const product = {
      ...this.form.value,
      price: +price,
      isAvailable: isAvailable || false
    };

    let product$: Observable<any>;
    let navParams = [];
    if (this.addNew) {
      product$ = this.service.addProduct(product);
      navParams = ['/products'];
    }
    else {
      product$ = this.service.updateProduct(this.id, product);
      navParams = ['/products', this.id];
    }

    product$.subscribe(
      () => {
        this.router.navigate(navParams);
      },
      (error) => {
        console.log('Add/Update product failed.');
        console.log('Error:', error);
      }
    );
  }

}

