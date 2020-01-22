import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products=[{name:"pro name 1"},{name:'pro name 2'},{name:'pro name 3'},{name:'pro name 4'},{name:'pro name 5'},{name:'pro name 6'}]
  constructor() { }

  ngOnInit() {
  }

}
