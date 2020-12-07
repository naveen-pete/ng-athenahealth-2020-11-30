import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];

  private subUpdateProducts: Subscription;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();

    this.subUpdateProducts = this.service.updateProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );
  }

  ngOnDestroy() {
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}
