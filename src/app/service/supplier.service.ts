import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier';
import { Productdto } from '../model/productdto';
import { ProductFromExcelDto } from '../modelDto/productfromexceldto';
import { SupplierDTO } from '../modelDto/supplierDTO';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  // new
  createsupplier(supplierDTO) {
    return this.http.post<any>('http://localhost:8080/recommendation-0.0.1/supplier', supplierDTO);
  }
  // new
  editsupplier(supplier) {
    return this.http.put<any>('http://localhost:8080/recommendation-0.0.1/editsupplier' , supplier);
  }
  // new
  brandsupplier(brandsupplier) {
    return this.http.post<string>('http://localhost:8080/recommendation-0.0.1/brandsupplier' , brandsupplier);
  }
  // new
  deletesupplier(supplierid) {
    return this.http.delete<any>('http://localhost:8080/recommendation-0.0.1/deletesupplier/' + supplierid);
  }
  // new
  getAllSuppliers() {
    return this.http.get<SupplierDTO[]>('http://localhost:8080/recommendation-0.0.1/getallsupplier');
  }

  getAllSupplier() {
    return this.http.get<Supplier[]>('http://localhost:8080/recommendation-0.0.1/get-supplier');
  }

  deleteProductsBySupplier(supplierId) {
    return this.http.get<Productdto[]>('http://localhost:8080/recommendation-0.0.1/delete-supplier-product/' + supplierId);
  }

  getAllSupplierByBrandId(brandId) {
    return this.http.get<Supplier[]>('http://localhost:8080/recommendation-0.0.1/get-supplier-by-brand/' + brandId);
  }

  getProductsBySupplierCombo(prodtSupplierVendorDto) {
    return this.http.post<ProductFromExcelDto[]>('http://localhost:8080/recommendation-0.0.1/get-all-supplier-vendor-brand' ,
    prodtSupplierVendorDto);
  }

  addProductsBySupplier(addSupplierProductDto) {
    return this.http.post<Productdto[]>('http://localhost:8080/recommendation-0.0.1//add-supplier-product' ,
    addSupplierProductDto);
  }

  getAllSupplierBySubCategoryId(subCategoryId) {
    return this.http.get<Supplier[]>('http://localhost:8080/recommendation-0.0.1/get-supplier-by-subcategory/' + subCategoryId);
  }
}
