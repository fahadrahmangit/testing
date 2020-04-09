import { Component, OnInit } from '@angular/core';
import { BrandService } from '../service/brand.service';
import { Subcategory } from '../model/subcategory';
import { Brand } from '../model/brand';
import { SupplierService } from '../service/supplier.service';
import { Supplier } from '../model/supplier';
import { Vendor } from '../model/vendor';
import { VendorService } from '../service/vendor.service';
import { ProtSupplrVendrDTO } from '../model/prodtsupplrvendrdto';
import { ProductFromExcelDto } from '../modelDto/productfromexceldto';
import { AddSupplierProductDto } from '../modelDto/addsupplierproductdto';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

  subCategoryList: Subcategory[];
  brandList: Brand[];
  display = false;
  brandId;
  supplierList: Supplier[];
  vendorId;
  supplierId;
  categoryId;
  subCategoryId;
  vendorList: Vendor[];
  displayTable = false;
  productSupplierVendorDto: ProtSupplrVendrDTO;
  productFromExcelDtos: ProductFromExcelDto[];
  productFromExcelCheckedValues: number[] = [];
  values: number[];
  displayAdd = false;
  addSupplierProductDto: AddSupplierProductDto;

  constructor(private brandService: BrandService, private supplierService: SupplierService, private vendorService: VendorService) { }

  ngOnInit() {
  }

  getSubCategory(cat) {
    console.log(cat.target.value);
    this.subCategoryList = [];
    if (cat.target.value !== 'null') {
    this.categoryId = cat.target.value;
    this.brandService.getSubcategory(cat.target.value).subscribe(data => {
      this.subCategoryList = data;
      console.log(this.subCategoryList);
    });
  }}

  getBrand(sub) {
    console.log(sub.target.value);
    this.brandList = [];
    if (sub.target.value !== 'null') {
    this.subCategoryId = sub.target.value;
    this.brandService.getBrand(sub.target.value).subscribe(data => {
      this.brandList = data;
      console.log(this.brandList);
    });
  }}

  getSupplier(subCategoryVal) {
    console.log(subCategoryVal.target.selectedOptions[0]);
    this.supplierList = [];
    if (subCategoryVal.target.value !== 'null') {
      this.subCategoryId = subCategoryVal.target.value;
      this.supplierService.getAllSupplierBySubCategoryId(this.subCategoryId).subscribe(data => {
        this.supplierList = data;
        console.log(this.supplierList);
      });
    }
  }

  getVendorBrand(supplyVal) {
    this.vendorList = [];
    if (supplyVal.target.value !== 'null') {
      this.supplierId = supplyVal.target.value;
      this.brandService.getBrandBySupplier(supplyVal.target.value).subscribe(data => {
        this.brandList = data;
        console.log(this.vendorList);
      });

      this.vendorService.getAllVendorBySupplierId(supplyVal.target.value).subscribe(data => {
        this.vendorList = data;
        console.log(this.vendorList);
      });
    }
  }

  setBrand(brandVal) {
    if (brandVal.target.value !== 'null') {
      this.brandId = brandVal.target.value;
    }
  }

  setVendor(vendorVal) {
    if (vendorVal.target.value !== 'null') {
      this.vendorId = vendorVal.target.value;
    }
    if (this.categoryId !== 'null' && this.subCategoryId !== 'null' && this.supplierId !== 'null' && this.brandId !== 'null'
        && this.vendorId !== 'null') {
          this.productSupplierVendorDto = new ProtSupplrVendrDTO(this.supplierId, this.vendorId, this.categoryId,
            this.subCategoryId, this.brandId);
          this.display = true;
          console.log(this.productSupplierVendorDto);
    }
  }

  getProducts() {
    this.supplierService.getProductsBySupplierCombo(this.productSupplierVendorDto).subscribe(data => {
      console.log(data);
      this.productFromExcelDtos = data;
      this.displayTable = true;
    });
  }

  addProducts() {
    this.addSupplierProductDto = new AddSupplierProductDto(this.brandId, this.supplierId, this.vendorId,
      this.productFromExcelCheckedValues);
    this.supplierService.addProductsBySupplier(this.addSupplierProductDto).subscribe(data => {
      console.log(data);
    });

  }

  toggleVisibility(e) {
    this.values = this.productFromExcelCheckedValues.filter(ob => ob === e.target.value);
    // console.log(this.values.length);
    if (this.values.length === 0) {
     this.productFromExcelCheckedValues.push(e.target.value);
     this.displayAdd = true;
    } else {
      this.values = this.productFromExcelCheckedValues;
      this.productFromExcelCheckedValues = [];
      this.values.forEach(x => {
        if (x !== e.target.value) {
          this.productFromExcelCheckedValues.push(x);
        }
      });
      if (this.productFromExcelCheckedValues.length === 0) {
        this.displayAdd = false;
      }
    }
    console.log(this.productFromExcelCheckedValues);
    // if (this.productFromExcelCheckedValues.length !== 0) {
    //      this.displayAdd = true;
    // } else {
    //   this.displayAdd = false;
    // }
  }

}
