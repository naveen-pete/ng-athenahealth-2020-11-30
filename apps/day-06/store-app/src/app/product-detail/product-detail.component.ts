import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = map.get('id');
      console.log('id:', this.id);

      this.product = this.service.getProduct(this.id);
    });
  }

  onDelete(productId: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId);
    }
  }

}
