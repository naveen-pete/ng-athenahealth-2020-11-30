import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  isLoading = false;
  // product: ProductModel = new ProductModel();
  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((map) => {
        this.id = map.get('id');
        this.isLoading = true;
        return this.service.getProduct(this.id)
      })
    ).subscribe(
      (product) => {
        this.product = product;
        this.isLoading = false;
      },
      (error) => {
        console.log('Get product failed.');
        console.log('Error:', error);
        this.isLoading = false;
      }
    );
  }

  onEdit() {
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete(productId: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log('Delete product failed.');
          console.log('Error:', error);
        }
      );
    }
  }

}
