import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private catService:CategoryService,private prodServe:ProductService) { }
  public produModel = new Product("","","","","","","")
  public categories=[];

  onSubmit(){
    console.log(this.produModel)
    this.prodServe.AddProduct(this.produModel).subscribe(resp =>
      console.log('Success!', resp),
      error => console.log('error', error))
    //  alert("ok")
  }
  ngOnInit() {
    // this.catService.listCategory().subscribe(data=>this.categories=data)
  }

}
