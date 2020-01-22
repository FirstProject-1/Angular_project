import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {
 public products=[]

constructor(private prodServe:ProductService) { }

public deleteProduct(prod_id){
    console.log(prod_id)
    this.prodServe.deleteProduct(prod_id).subscribe(
      response => console.log('Done', response),
      error => console.log('error',error)
    )
  }

  ngOnInit() {
    this.prodServe.getAllProduct().subscribe(data=>this.products=data)
  }

}
