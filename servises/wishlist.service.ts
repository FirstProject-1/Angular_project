import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wishlist } from './wishlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

//add to wishlist method
  AddWishlist(wishlst:Wishlist){
    console.log(wishlst)
    return  this.http.post<any>('http://localhost:8080/wishlist/addWishlist',wishlst)
  }


  //list wishlist method
  getAllWishlist():Observable<any>{
    return this.http.get('http://localhost:8080/wishlist/listWishlist')
   }

}
