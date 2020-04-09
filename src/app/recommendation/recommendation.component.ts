import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { RecommendationServiceService } from '../service/recommendation-service.service';
import { Productdto } from '../model/productdto';
import { Subcategory } from '../model/subcategory';
import { BrandService } from '../service/brand.service';
import { Brand } from '../model/brand';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

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

  getProduct(sub) {
    console.log(sub.target.selectedOptions[0]);
    if (sub.target.value !== 'null') {
      this.brandService.getAllProductByBrand(sub.target.value).subscribe(data => {
        this.productList = data;
        console.log(this.productList);
        this.displayTable = true;
      });
    }
  }

}
