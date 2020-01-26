import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productModel=[]

  constructor(private prodServe:ProductService,private cartService:CartServiceService) { }

  ngOnInit() {
    this.prodServe.getAllProduct().subscribe(data=>{this.productModel=data;})
  }

  public addToCart(product_id){
    console.log(product_id)
    this.cartService.cartProducting(product_id).subscribe(
      response => console.log('add to cart', response),
      error => console.log('error',error)
      )
  }

}
