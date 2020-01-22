import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-category',
  templateUrl: './each-category.component.html',
  styleUrls: ['./each-category.component.css']
})
export class EachCategoryComponent implements OnInit {
  public products=[{name:"pro name 1"},{name:'pro name 2'},{name:'pro name 3'},{name:'pro name 4'}]
  constructor() { }

  ngOnInit() {
  }

}
