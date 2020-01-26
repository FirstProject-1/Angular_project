import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EachCategoryComponent } from './each-category/each-category.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AddProductComponent } from './admin-area/add-product/add-product.component';
import { AddCategoryComponent } from './admin-area/add-category/add-category.component';
// import{HttpClientModule} from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { BodyComponent } from './body/body.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductService } from 'servises/product.service';
import{HttpClientModule, HttpClient} from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import {FormsModule} from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsManagementComponent } from './admin-area/products-management/products-management.component';
import { CategoryManagmentComponent } from './admin-area/category-managment/category-managment.component';
import { SliderComponent } from './slider/slider.component';
import { CartServiceService } from './services/cart/cart-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    EachCategoryComponent,
    AdminAreaComponent,
    AddProductComponent,
    AddCategoryComponent,
    CartPageComponent,
    WishListPageComponent,
    BodyComponent,
    HomePageComponent,
    NoPageFoundComponent,
    ProductsManagementComponent,
    CategoryManagmentComponent,
    SliderComponent,
    LoginComponent,
    SignupComponent,
    LoginUserComponent,
    LoginAdminComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
  ,
  providers: [ProductService,CategoryService,CartServiceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
