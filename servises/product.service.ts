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
     console.log(product)
    return this.http.post<any>('http://localhost:8080/product/addProduct',product)
   }

   //list product method
   getAllProduct():Observable<any>{
    return this.http.get('http://localhost:8080/product/listProudct')
   }

   // delete product by _id
 deleteProduct(_id):Observable<any>{
  return this.http.get("http://localhost:8080/product/deleteProduct/"+_id)
}

// product details by _id

productDetails(_id):Observable<any>{
  return this.http.get("http://localhost:8080/product/productDetails/"+_id)
}

}