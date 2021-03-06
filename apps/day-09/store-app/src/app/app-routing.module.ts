import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsComponent } from './products/products.component';

// map url to a component
// route - path, component
// http://localhost:4200 - HomeComponent
// http://localhost:4200/products - ProductsComponent
// http://localhost:4200/products/new - ProductFormComponent
// http://localhost:4200/products/10 - ProductDetailComponent
// http://localhost:4200/products/10/edit - ProductFormComponent
// http://localhost:4200/sign-up - SignUpComponent
// http://localhost:4200/login - LoginComponent

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'products', canActivate: [AuthGuard], component: ProductsComponent, children: [
      {
        path: '', component: NotificationComponent, data: {
          header: 'Note!',
          message: 'Use \'Add New Product\' button to create a product. Select a product to view its details.',
          type: 'info'
        }
      },
      { path: 'new', component: ProductFormComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent },
    ]
  },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '**', component: NotificationComponent, data: {
      header: 'Sorry!',
      message: '404 - Page not found.',
      type: 'danger'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
