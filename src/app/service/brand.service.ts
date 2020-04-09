import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from '../model/subcategory';
import { Brand } from '../model/brand';
import { Product } from '../model/product';
import { BrandDTO } from '../modelDto/brandDTO';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getSubcategory(catid) {
    return this.http.get<Subcategory[]>('http://localhost:8080/recommendation-0.0.1/get-subcategory/' + catid);
  }

  getBrand(subid) {
    return this.http.get<Brand[]>('http://localhost:8080/recommendation-0.0.1/get-brand/' + subid);
  }

  getBrandBySupplier(supplierid) {
    return this.http.get<Brand[]>('http://localhost:8080/recommendation-0.0.1/get-brand-by-supplier/' + supplierid);
  }

  deleteProductsByBrand(brandid) {
    return this.http.get<Product[]>('http://localhost:8080/recommendation-0.0.1/delete-brand/' + brandid);
  }

  addProductsByBrand(brandid) {
    return this.http.get<Product[]>('http://localhost:8080/recommendation-0.0.1/add-brand/' + brandid);
  }

  getAllProductByBrand(subid) {
    return this.http.get<Product[]>('http://localhost:8080/recommendation-0.0.1/getallproductenabled/' + subid);
  }

  getAllBrands(supplierid) {
    return this.http.get<BrandDTO[]>('http://localhost:8080/recommendation-0.0.1/getallbrands/' + supplierid);
  }

  getAllBrandsByVendorId(vendorId) {
    return this.http.get<BrandDTO[]>('http://localhost:8080/recommendation-0.0.1/getallbrandsbyvendorid/' + vendorId);
  }
}
