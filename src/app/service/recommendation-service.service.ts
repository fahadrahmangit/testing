import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Productdto } from '../model/productdto';

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceService {

  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get<Product[]>('http://localhost:8080/recommendation-0.0.1/getproductforselect');
  }

  getAllRecommendation(id) {
    return this.http.get<Productdto[]>('http://localhost:8080/recommendation-0.0.1/getrecommendationforselect/' + id);
  }
}
