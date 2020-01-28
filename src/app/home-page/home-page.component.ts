import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';
import { CategoryService } from '../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public categories=[];
  public products=[]
  constructor(private catService:CategoryService,private route:Router) { }
  
  ngOnInit() {
    
      this.catService.listCategory().subscribe(data=>this.categories=data)
  

}
public CategoryProducts(CategoryProducts){
  this.route.navigate(["/each",CategoryProducts._id])

  // this.catService.CategoryProducts(CategoryProducts_id).subscribe(data=>{this.products=data;console.log(data)})
}
}
