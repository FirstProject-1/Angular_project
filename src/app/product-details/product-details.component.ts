import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'servises/product';
import { CartServiceService } from '../services/cart/cart-service.service';
import { WishlistService } from 'servises/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product={}
  constructor( private prodServe:ProductService, private routeA:ActivatedRoute,private cartService:CartServiceService,private wishlistServe:WishlistService) { }
  public product_id;

  ngOnInit() {
    this.routeA.paramMap.subscribe((p:ParamMap)=>{
      this.product_id=p.get("id")
      })
      this.prodServe.productDetails(this.product_id).subscribe(data=>
        {
          this.product=data;
        })
}

//add wishlist detialsproduct
public addWishlist(product_id,product_name,product_price,product_img){
  console.log(product_id)
  this.wishlistServe.wishlistProducs(product_id,product_name,product_price,product_img).subscribe(
    response => console.log('add to cart', response),
    error => console.log('error',error)
    )
    alert("proudct sent")
}

//add to cart from detailsproduct
public addToCart(product_id,product_price,product_name,product_img){
  console.log(product_id)
  this.cartService.cartProducting(product_id,product_price,product_name,product_img).subscribe(
    response => console.log('add to cart', response),
    error => console.log('error',error)
    )
    alert("proudct sent")
}  

}

