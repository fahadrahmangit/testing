import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../service/subcategory.service';
import { BrandService } from '../service/brand.service';
import { Subcategory } from '../model/subcategory';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  subCategoryList: Subcategory[];
  display = false;
  subId;
  subName;

  constructor(private subcategoryService: SubcategoryService, private brandService: BrandService) { }

  ngOnInit() {
  }

  getSubCategory(cat) {
    console.log(cat.target.value);
    this.brandService.getSubcategory(cat.target.value).subscribe(data => {
      this.subCategoryList = data;
      console.log(this.subCategoryList);
    });
  }

  confirmation(subVal) {
    console.log(subVal.target.selectedOptions[0]);
    if (subVal.target.value !== 'null') {
      this.display = true;
      this.subId = subVal.target.value;
      this.subName = subVal.target.selectedOptions[0].text;
    }
  }

  addProducts() {
    this.subcategoryService.addProductsBySubCategory(this.subId).subscribe(data => {
      console.log(data);
    });
  }

}
