import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { Brand } from '../model/brand';
import { BrandService } from '../service/brand.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

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

  addProducts() {
    this.brandService.addProductsByBrand(this.brandId).subscribe(data => {
      this.productList = data;
      console.log(this.productList);
      this.displayTable = true;
    });
  }

}
