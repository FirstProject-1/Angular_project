import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { BodyComponent } from './body/body.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductService } from 'servises/product.service';
import{HttpClientModule, HttpClient} from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    WishListPageComponent,
    BodyComponent,
    HomePageComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
