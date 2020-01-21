import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories=["1","2","e",""]
  productModel=[]
  // public products = new Product('','','','','','')
  constructor(private prodServe:ProductService) { }


  ngOnInit() {
    // this.prodServe.AddProduct(this.products).subscribe(resp =>
    //   console.log('Success!', resp),
    //   error => console.log('error', error))
    //  alert("ok ")

    this.prodServe.getAllProduct().subscribe(data=>
      {
        this.productModel=data;
      })


  }

}
