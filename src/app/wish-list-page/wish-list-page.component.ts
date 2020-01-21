import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {
  orders=["amal","d","uu"]
  constructor() { }

  ngOnInit() {
  }

}
