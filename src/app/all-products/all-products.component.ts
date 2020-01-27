import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productModel=[]

  constructor(private prodServe:ProductService,private cartService:CartServiceService,private route:Router) { }

  ngOnInit() {
    this.prodServe.getAllProduct().subscribe(data=>{this.productModel=data;})
  }

  public addToCart(product_id,product_price){
    console.log(product_id)
    this.cartService.cartProducting(product_id,product_price).subscribe(
      response => console.log('add to cart', response),
      error => console.log('error',error)
      )
  }
  public productDetails(_id){
    console.log(_id)
    this.prodServe.productDetails(_id).subscribe(
      response => console.log('Done', response),
      error => console.log('error',error)
    )
  }
  OnSelect(product){
    this.route.navigate(["/productDetails",product._id]);
  }

  
}
