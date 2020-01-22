import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-managment',
  templateUrl: './category-managment.component.html',
  styleUrls: ['./category-managment.component.css']
})
export class CategoryManagmentComponent implements OnInit {

  constructor(private catService:CategoryService) { }
public categories=[]
  ngOnInit() {
    this.catService.listCategory().subscribe(data=>this.categories=data)

  }
  public deletThisCategory(categ_id){
    // console.log(categ_id)
    this.catService.deletCategory(categ_id).subscribe(
      response => console.log('toooooooo db', response),
      error => console.log('error',error)
    )
  }

}
