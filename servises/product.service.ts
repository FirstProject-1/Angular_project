import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //add product method
   AddProduct(product:Product){
     return this.http.post<any>('http://localhost:5050/product/addProduct',product)
   }

   //list product method
   getAllProduct():Observable<any>{
    return this.http.get('http://localhost:5050/product/listProudct')
   }

}
