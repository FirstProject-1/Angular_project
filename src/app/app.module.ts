import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EachCategoryComponent } from './each-category/each-category.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AddProductComponent } from './admin-area/add-product/add-product.component';
import { AddCategoryComponent } from './admin-area/add-category/add-category.component';
import{HttpClientModule} from '@angular/common/http';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    EachCategoryComponent,
    AdminAreaComponent,
    AddProductComponent,
    AddCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
