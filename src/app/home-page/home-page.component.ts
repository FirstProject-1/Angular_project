import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';
import { CategoryService } from '../services/category/category.service';
import { WishlistService } from 'servises/wishlist.service';
import { Wishlist } from 'servises/wishlist';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public categories=[]

  constructor(private catService:CategoryService) { }
  
     


  ngOnInit() {
    
      this.catService.listCategory().subscribe(data=>this.categories=data)
}
}
