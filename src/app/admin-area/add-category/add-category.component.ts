import { Component, OnInit } from '@angular/core';
import { catForm } from 'src/app/classes/catForm';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private catService:CategoryService,private prodServe:ProductService) { }
  // public catModel ={'cat1':String,'sss':String}

  public catModel = new catForm('','')
   onSubmit() {
    this.catService.addCategory(this.catModel).subscribe(
      response => console.log('toooooooo db', response),
      error => console.log('error',error)
      ) 
  }

  public categories=[];
  public show(){
    this.catService.listCategory().subscribe(data=>this.categories=data)
  }
  
  
  ngOnInit() {

  }

}
