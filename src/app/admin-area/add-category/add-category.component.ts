import { Component, OnInit } from '@angular/core';
import { categForm } from 'src/app/classes/catForm';
import { CategoryService } from 'src/app/services/category/category.service';
// import {Stringify} from 'querystring';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private catService:CategoryService) { }
  ngOnInit() {

  }
  public catModel = new categForm("","");
 
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
 

}
