import { Injectable } from '@angular/core';
import { catForm } from '../../classes/catForm';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { categories } from '../../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  addCategory(cat:catForm) {
    console.log("pppp")
    return this.http.post<any>('http://localhost:8080/adminAera/addCategory/added',cat);
  }
  
  listCategory():Observable<categories[]>{
    return this.http.get<categories[]>("http://localhost:8080/adminAera/addCategory/list")
  }
}
