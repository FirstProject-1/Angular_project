import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-each-category',
  templateUrl: './each-category.component.html',
  styleUrls: ['./each-category.component.css']
})
export class EachCategoryComponent implements OnInit {
  public category_id;
  public categoryProducts;
 
  constructor(private catService:CategoryService,private routeA:ActivatedRoute,private cartServe:CartServiceService) { }
   
  ngOnInit() {
    this.routeA.paramMap.subscribe((param:ParamMap)=>{
      this.category_id=param.get("id")
    })
    // console.log(this.category_id+"...");
    
    // console.log(this.categoryProducts)

    this.catService.CategoryProducts(this.category_id).subscribe(data=>
      {
        // console.log(typeof(data));
        this.categoryProducts=data;
    
    }
    )
  }
  public addToCart(product_id,product_price,product_name,product_img){
    console.log(product_id)
    this.cartServe.cartProducting(product_id,product_price,product_name,product_img).subscribe(
      response => console.log('add to cart', response),
      error => console.log('error',error)
      )
  }
  

}
