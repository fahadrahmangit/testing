import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  deleteProductsBySubCategory(subid) {
    return this.http.get<boolean>('http://localhost:8080/recommendation-0.0.1/delete-subcategory/' + subid);
  }

  addProductsBySubCategory(subid) {
    return this.http.get<boolean>('http://localhost:8080/recommendation-0.0.1/add-subcategory/' + subid);
  }
}
