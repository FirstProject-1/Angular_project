import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product=[];
  constructor( private prodServe:ProductService, private routeA:ActivatedRoute) { }
  public product_id;
  ngOnInit() {
    this.routeA.paramMap.subscribe((p:ParamMap)=>{
      this.product_id=p.get("id")
      })
      this.prodServe.productDetails(this.product_id).subscribe(data=>
        {this.product=data;
  })
  
  

}}

