import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { categForm } from '../classes/catForm';
import { Product } from 'servises/product';

@Component({
  selector: 'app-each-category',
  templateUrl: './each-category.component.html',
  styleUrls: ['./each-category.component.css']
})
export class EachCategoryComponent implements OnInit {
  public category_id;
  public categoryProducts=new Product("","","","","","","");
  
  constructor(private catService:CategoryService,private routeA:ActivatedRoute ) { }

  ngOnInit() {
    this.routeA.paramMap.subscribe((param:ParamMap)=>{
      this.category_id=param.get("id")
    })
    console.log(this.category_id+"...");
    
    console.log(this.categoryProducts)

    this.catService.CategoryProducts(this.category_id).subscribe(data=>
      {this.categoryProducts=data 
      console.log(data)}

    )
  }

}
