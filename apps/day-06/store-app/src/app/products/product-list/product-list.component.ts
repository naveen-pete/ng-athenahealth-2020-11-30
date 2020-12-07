import { Component, OnInit, OnDestroy } from '@angular/core';

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

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    console.log('ProductList.ngOnInit() invoked.');
    this.products = this.service.getAllProducts();

    this.subUpdateProducts = this.service.updateProducts.subscribe(
      (products: ProductModel[]) => this.products = products
    );
  }

  ngOnDestroy() {
    console.log('ProductList.ngOnDestroy() invoked.');
    if (this.subUpdateProducts) {
      this.subUpdateProducts.unsubscribe();
    }
  }

}
