import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDTO } from '../modelDto/ProductDTO';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  createproduct(product) {
    return this.http.post<ProductDTO[]>('http://localhost:8080/recommendation-0.0.1/createproduct', product);
  }
  findall() {
    return this.http.get<ProductDTO[]>('http://localhost:8080/recommendation-0.0.1/findallproducts');
  }

  findAutocompleteByName(name: string) {
    return this.http.get<ProductDTO[]>('http://localhost:8080/recommendation-0.0.1/findsearchproductlists/' +  name);
  }

  findRecommendationProducts(id: number) {
    return this.http.get<ProductDTO[]>('http://localhost:8080/recommendation-0.0.1/findallrecommendatedproduct/' +  id);
  }

}
