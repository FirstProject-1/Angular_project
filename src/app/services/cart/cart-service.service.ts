import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; //http/http
import { cartClass } from '../../classes/cartClass';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  cartProducting(prductId,productPrice,productName,productImg):Observable<any>{
    console.log(prductId)
    return this.http.get('http://localhost:8080/cart/add/'+prductId+'/'+productPrice+'/'+productName+'?img='+productImg,{
      observe :'body',   
      params : new HttpParams().append('userToken',localStorage.getItem('userToken'))})
  }

  cartProductsDetails():Observable<any>{
    return this.http.get('http://localhost:8080/cart/details',{
      observe :'body',   
      params : new HttpParams().append('userToken',localStorage.getItem('userToken'))})
  }
  
  clearCart():Observable<any>{
    return this.http.get<any>('http://localhost:8080/cart/clear',{
      observe :'body',   
      params : new HttpParams().append('userToken',localStorage.getItem('userToken'))})
    
  }
  /* deleteProductInCart(productID):Observable<any>{
    return this.http.get<any>('http://localhost:8080/cart/deleteItem/'+productID)
  } */
}
