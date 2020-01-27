import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products=[{name:"pro name 1"},{name:'pro name 2'},{name:'pro name 3'},{name:'pro name 4'},{name:'pro name 5'},{name:'pro name 6'}]
  constructor( private prodServe:ProductService , private route:Router) { }

  ngOnInit() {
  }
  public productDetails(_id){
    console.log(_id)
    this.prodServe.productDetails(_id).subscribe(
      response => console.log('Done', response),
      error => console.log('error',error)
    )
  }
  OnSelect(product){
    this.route.navigate(["/productDetails",product._id]);
  }

  
}
