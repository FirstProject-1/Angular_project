import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { WishlistService } from 'servises/wishlist.service';
import { ProductService } from 'servises/product.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {
  wishlistForm=[]
  products_id=[]
  productDetails=[]
  constructor( private fb: FormBuilder,private wishlistSeve:WishlistService,private prodServe:ProductService) { }

  
  
  ngOnInit() {
  
    // console.log(this.wishlistForm)
      this.wishlistSeve.getAllWishlist().subscribe(data=>{
          //  this.wishlistForm=data;
           console.log(data)
           this.products_id.push(data.product_id);
           
          console.log(this.products_id)
          for( let i of this.products_id){
            this.prodServe.productDetails(this.products_id[i]).subscribe(data=>{
              this.productDetails=data
              console.log(data)
            }
           )
          }
         
      }
      
      )
      // console.log(this.products_id)
      this.products_id.forEach(item => {
        console.log(item)
        this.prodServe.productDetails(item).subscribe(data=>{
          this.productDetails=data
          console.log(data)
        }
       )
      });
      
  }

}
