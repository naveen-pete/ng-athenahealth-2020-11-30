import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];

  private subUpdateProducts: Subscription;

  constructor(
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();

    this.subUpdateProducts = this.service.updateProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );
  }

  onAdd() {
    this.router.navigate(['/products/new']);
  }

  ngOnDestroy() {
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}
