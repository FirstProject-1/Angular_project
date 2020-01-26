import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //http/http
import { cartClass } from '../../classes/cartClass';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  cartProducting(prductId,productPrice):Observable<any>{
    console.log(prductId)
    return this.http.get<any>('http://localhost:8080/cart/add/'+prductId+'/'+productPrice)
  }

  cartDetails():Observable<any>{
    return this.http.get('http://localhost:8080/cart/details')
  }
}