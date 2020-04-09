import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandService } from '../service/brand.service';
import { Subcategory } from '../model/subcategory';
import { Brand } from '../model/brand';
import { Product } from '../model/product';

@Component({
  selector: 'app-deletebrand',
  templateUrl: './deletebrand.component.html',
  styleUrls: ['./deletebrand.component.css']
})
export class DeletebrandComponent implements OnInit {

  subCategoryList: Subcategory[];
  brandList: Brand[];
  display = false;
  brandId;
  brandName;
  productList: Product[];
  displayTable = false;

  constructor(private brandService: BrandService) { }

  ngOnInit() {
  }

  getSubCategory(cat) {
    console.log(cat.target.value);
    this.brandService.getSubcategory(cat.target.value).subscribe(data => {
      this.subCategoryList = data;
      console.log(this.subCategoryList);
    });
  }

  getBrand(sub) {
    console.log(sub.target.value);
    this.brandService.getBrand(sub.target.value).subscribe(data => {
      this.brandList = data;
      console.log(this.brandList);
    });
  }

  confirmation(brandVal) {
    console.log(brandVal.target.selectedOptions[0]);
    if (brandVal.target.value !== 'null') {
      this.display = true;
      this.brandId = brandVal.target.value;
      this.brandName = brandVal.target.selectedOptions[0].text;
    }
  }

  deleteProducts() {
    this.brandService.deleteProductsByBrand(this.brandId).subscribe(data => {
      this.productList = data;
      console.log(this.productList);
      this.displayTable = true;
    });
  }
}
