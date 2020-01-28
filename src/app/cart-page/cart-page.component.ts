import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public productsInCart=[]
  public cartInfo=[];
  constructor(private cartService:CartServiceService){}

  ngOnInit() {
    this.cartService.cartProductsDetails().subscribe(data=>{
      this.productsInCart=data.products;
      this.cartInfo=data;
      console.log(data)
    });
  }
   clearAllOfTheCart(){
    this.cartService.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }
 
}
