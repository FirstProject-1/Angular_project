import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EachCategoryComponent } from './each-category/each-category.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AddProductComponent } from './admin-area/add-product/add-product.component';
import { AddCategoryComponent } from './admin-area/add-category/add-category.component';
import { CategoryService } from './services/category/category.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { BodyComponent } from './body/body.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductService } from 'servises/product.service';
import{ HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import {FormsModule} from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsManagementComponent } from './admin-area/products-management/products-management.component';
import { CategoryManagmentComponent } from './admin-area/category-managment/category-managment.component';
import { SliderComponent } from './slider/slider.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/tokenInterceptor/token-interceptor.service';
import {ReactiveFormsModule} from '@angular/forms';
import { WishlistService } from 'servises/wishlist.service';
import { CartServiceService } from './services/cart/cart-service.service';
//import { Wishlist2Component } from './wishlist2/wishlist2.component';


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
    AllProductsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
  ,
  providers: [ProductService,CategoryService,CartServiceService,WishlistService,AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
