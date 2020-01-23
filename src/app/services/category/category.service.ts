import { Injectable } from '@angular/core';
import { categForm } from '../../classes/catForm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categories } from '../../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  //add category
  addCategory(cat:categForm) {
   console.log(cat)
    return this.http.post<any>('http://localhost:8080/Category/add',cat);
  }
  //list category
  listCategory():Observable<any>{
    return this.http.get("http://localhost:8080/Category/list")
  }
  //category delete by _id
  deletCategory(Category_id):Observable<any>{
    // console.log(Category_id)
    return this.http.get("http://localhost:8080/Category/delete/"+Category_id);
  }
}
