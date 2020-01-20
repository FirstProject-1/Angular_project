import { Component, OnInit } from '@angular/core';
import { catForm } from 'src/app/interfaces/catForm';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private catService:CategoryService) { }
  public catModel = new catForm('','')
   onSubmit() {
    this.catService.addCategory(this.catModel).subscribe(
      response => console.log('Success!', response),
      error => console.log('error',error)
      )
      console.log("nnnn")
  }

  public test(){
    this.catService.addCategory(this.catModel).subscribe(
      response => console.log('Success!', response),
      error => console.log('error',error)
      )
  }
  ngOnInit() {
  }

}
