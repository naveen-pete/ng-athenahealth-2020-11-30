import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(productId: string) {
    if (confirm('Are you sure?')) {
      this.deleteProduct.emit(productId);
    }
  }

}
