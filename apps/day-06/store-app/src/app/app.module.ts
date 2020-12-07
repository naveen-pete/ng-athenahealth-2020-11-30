import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductsService } from './services/products.service';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';

// map url to a component
// route - path, component
// http://localhost:4200 - HomeComponent
// http://localhost:4200/products - ProductsComponent
// http://localhost:4200/products/10 - ProductDetailComponent
// http://localhost:4200/sign-up - SignUpComponent
// http://localhost:4200/login - LoginComponent

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  // route parameter
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

  // solution 1 - not found component
  { path: '**', component: NotFoundComponent }

  // solution 2 - redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    NotFoundComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
