import { Component, OnInit } from '@angular/core';
import { ProductService } from 'servises/product.service';
import { Product } from 'servises/product';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../services/category/category.service';

 @Component({
   selector: 'app-wishlist2',
  template: `
  <body>
  <br>
  <div class="container" style="background-color: #5a6c805e; opacity: 1; width:70% ;"  >
  <h3>Meals</h3>
  <div *ngFor="let item of productModel">
    <input type="checkbox" 
    (change)="onChange($event.target.checked, item)"
    [checked]="checked(item)"
  >
 
    {{item.name}}
  </div>
  <br>
  <textarea rows="4" cols="50"  [(ngModel)]="notes" >

  </textarea>
  <br>
  <span> {{selected.length}} meals selected <br> {{notes}}</span>
  <br>
  <button type="submit" class="btn btn-primary" (click)="save()">CheckOut</button>
  <br>
  <hr>
  <h3 *ngIf="messages.length != 0">Order Done</h3>
  <div *ngFor="let item of messages">
    <span > {{item}} </span>
  </div>
  </div>
<body>
  
  `,
  styles: []
})
export class Wishlist2Component implements OnInit {

  constructor(private prodServe:ProductService, private fb: FormBuilder,private catService:CategoryService) { }
  public categories=[]
  productModel=[]

  ngOnInit() {
    // this.prodServe.getAllProduct().subscribe(data=>{
    //   this.options=data;
   // })
   
    this.prodServe.getAllProduct().subscribe(data=>
      {
        this.productModel=data;
      })

}

  
  // create time
    time=new Date().toUTCString();
    selected = [];
    messages = [];
    produNames=[];
    price=[];
    brand=[];
    img=[];
    
  // check if the item are selected
  checked(item){
    if(this.selected.indexOf(item) != -1){
      return true;
    }
  }
  
  // when checkbox change, add/remove the item from the array
  onChange(checked, item){
    if(checked){
    this.selected.push(item.name);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }
   public produModel=new Product("","","","","","","");

  // this.time,this.mealNames,this.notes

  save(){
    this.messages.push(this.selected.sort());
    this.produNames.push(this.selected.sort())
    
   this.prodServe.AddProduct(this.produModel).subscribe(response =>
    console.log('Success!', response),
    error => console.log('error', error)); 
  }
  


}
