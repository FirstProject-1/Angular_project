import { Injectable } from '@angular/core';
import { catForm } from '../interfaces/catForm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  addCategory(cat:catForm) {
    return this.http.post<any>('http://localhost:8080/adminAera/addCategory/added',cat);
  }
}
