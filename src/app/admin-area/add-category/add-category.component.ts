import { Component, OnInit } from '@angular/core';
import { categForm } from 'src/app/classes/catForm';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'servises/product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public catModel = new categForm("","");

  constructor(private catService:CategoryService) { }
  
   onSubmit() {
    this.catService.addCategory(this.catModel).subscribe(
      response => console.log('toooooooo db', response),
      error => console.log('error',error)
      ) 
  }

  
  
  ngOnInit() {

  }
 

}
