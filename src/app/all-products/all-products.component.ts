import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productModel=[]

  constructor(private prodServe:ProductService) { }

  ngOnInit() {
    this.prodServe.getAllProduct().subscribe(data=>{this.productModel=data;})}

  public addToCart(product_id){
  }

}
