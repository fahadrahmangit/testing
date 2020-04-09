import { Injectable } from '@angular/core';
import { Vendor } from '../model/vendor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  getAllVendorBySupplierId(supId) {
    return this.http.get<Vendor[]>('http://localhost:8080/recommendation-0.0.1/get-vendor-by-supplier/' + supId);
  }

  getAllVendorByCategoryId(categoryId) {
    return this.http.get<Vendor[]>('http://localhost:8080/recommendation-0.0.1/get-vendor-by-category/' + categoryId);
  }

  deleteProductsByVendor(vendorId) {
    return this.http.get<boolean>('http://localhost:8080/recommendation-0.0.1/delete-product-by-vendor/' + vendorId);
  }

  addProductsByVendor(brandId, vendorId) {
    return this.http.get<boolean>('http://localhost:8080/recommendation-0.0.1/add-product-by-vendor/' + brandId + '/' + vendorId);
  }
}
