import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './services/cart/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  public productsInCart=[]
  public cartInfo={};
  constructor(private cartService:CartServiceService){}

  ngOnInit() {

    this.cartService.cartProductsDetails().subscribe(data=>{
      if(data.products.length!==null){
        this.cartInfo=data;
        console.log(data)
      } else{
        this.productsInCart=["there is no products here yet"]
      }
      
      
    });
  }
}
