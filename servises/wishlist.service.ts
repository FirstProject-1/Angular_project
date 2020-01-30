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
wishlistProducs(prductId,productName,productPrice,productImg):Observable<any>{
  console.log(prductId)
  return this.http.get('http://localhost:8080/wishlist/addWishlist/'+prductId+'/'+productName+'/'+productPrice+'?img='+productImg)
}

//wish list product details
wishlistProductsDetails():Observable<any>{
  return this.http.get('http://localhost:8080/wishlist/wishlistDetails')
}


//clear all wishlist
clearWishlist():Observable<any>{
  return this.http.get<any>('http://localhost:8080/wishlist/clearWishlist')
  
}
}

