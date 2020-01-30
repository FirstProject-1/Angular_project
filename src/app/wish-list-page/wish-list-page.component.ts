import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { WishlistService } from 'servises/wishlist.service';
import { ProductService } from 'servises/product.service';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {
  wishlistForm=[]
  products_id=[]
  productDetails=[]

  constructor( private wishlistServ:WishlistService ,private cartService:CartServiceService) { }
  public productsIishList=[]
  
  
  // clear all wishlist
  clearAllOfThewishlist(){
    this.wishlistServ.clearWishlist().subscribe(data=>console.log("you've cleared your cart"))
  }
 
  // add cart form wishist
  public addToCart(product_id,product_price,product_name,product_img){
    console.log(product_id)
    this.cartService.cartProducting(product_id,product_price,product_name,product_img).subscribe(
      response => console.log('add to cart', response),
      error => console.log('error',error)
      )
  }

  // on init
  ngOnInit() {
    this.wishlistServ.wishlistProductsDetails().subscribe(data=>{
      if(data.length!==null){
        this.productsIishList=data;
        
        console.log(data)
      } else{
        this.productsIishList=["there is no products here yet"]
      }
    });

    // console.log(this.wishlistForm)
      // this.wishlistSeve.getAllWishlist().subscribe(data=>{
          //  this.wishlistForm=data;
      //      console.log(data)
      //      this.products_id.push(data.product_id);
           
      //     console.log(this.products_id)
      //     for( let i of this.products_id){
      //       this.prodServe.productDetails(this.products_id[i]).subscribe(data=>{
      //         this.productDetails=data
      //         console.log(data)
      //       }
      //      )
      //     }
         
      // }
      
      // )
      // console.log(this.products_id)
  //     this.products_id.forEach(item => {
  //       console.log(item)
  //       this.prodServe.productDetails(item).subscribe(data=>{
  //         this.productDetails=data
  //         console.log(data)
  //       }
  //      )
  //     });
      
  // }

}}
