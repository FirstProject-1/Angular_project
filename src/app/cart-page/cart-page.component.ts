import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ProductService } from 'servises/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public productsInCart=[]
  public cartInfo=[];
  public product_id;
  public product={}
  constructor(private cartService:CartServiceService, private param:ActivatedRoute,private proudServ:ProductService){}
 

  // on init
  ngOnInit() {
    
    this.cartService.cartProductsDetails().subscribe(data=>{
      if(data.products.length!==null){
        this.productsInCart=data.products;
        this.cartInfo=data;
        console.log(data)
      } else{
        this.productsInCart=["there is no products here yet"]
      }
      
      
    });
  }
   clearAllOfTheCart(){
    this.cartService.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }
  /* deleteThisProduct(porduct_id){
    this.cartService.deleteProductInCart(porduct_id).subscribe(data=>console.log("you've deleted product of id"+porduct_id))
  } */
}
