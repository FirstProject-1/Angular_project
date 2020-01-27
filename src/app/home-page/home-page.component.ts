import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public categories=[]
  productModel=[]

  constructor(private prodServe:ProductService,private catService:CategoryService) { }
  
  ngOnInit() {
    this.prodServe.getAllProduct().subscribe(data=>
      {
        this.productModel=data;
      })

      this.catService.listCategory().subscribe(data=>this.categories=data)
  

}}
