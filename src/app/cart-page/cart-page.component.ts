import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public productsInCart=[]
  public cartInfo=[];
  constructor(private cartService:CartServiceService, private route:Router){}

  ngOnInit() {
    this.cartService.cartProductsDetails().subscribe(data=>{
        this.productsInCart=data.products;
        this.cartInfo=data;
        console.log(data)
    }
    
    );
  }
   clearAllOfTheCart(){
    this.cartService.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }
  /* deleteThisProduct(porduct_id){
    this.cartService.deleteProductInCart(porduct_id).subscribe(data=>console.log("you've deleted product of id"+porduct_id))
  } */
}
