// JS module import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

// Angular Module
// Decorator
@NgModule({
  declarations: [
    AppComponent, // components, directives, pipes
    HeaderComponent,
    ProductsComponent
  ],
  imports: [   // Angular
    BrowserModule
  ],
  providers: [], // services
  bootstrap: [AppComponent] // root component
})
export class AppModule { }  // root module

// fn_name(param1, param2)
// fn_name({})

// {} = empty object
// [] = empty array

// object literal notation
// var customer = {
//   id: 10,
//   name: 'Hari',
//   hobbies: [1, 2, 3]
// };

// Decorator - Annotation - Attribute
// 

// class Product {
//   private id: number;
//   private name: string;
//   price: number;       // public
//   isAvailable: boolean;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   showDetails(): void {  // public
//     console.log('Product details.');
//     console.log('Name:', this.name);
//   }
// }

// var obj: Product = new Product(10, 'Krish');
