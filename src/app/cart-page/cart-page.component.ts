import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  productsInCart=[]
  constructor(private cartService:CartServiceService){ }

  ngOnInit() {
    this.cartService.cartDetails().subscribe(data=>{this.productsInCart=data;console.log(data)})
    
  }

}
