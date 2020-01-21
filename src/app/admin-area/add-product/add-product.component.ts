import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private catService:CategoryService) { }

  public categories=[];
  ngOnInit() {
    this.catService.listCategory().subscribe(data=>this.categories=data)
  }

}
