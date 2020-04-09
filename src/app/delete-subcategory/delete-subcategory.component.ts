import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { SubcategoryService } from '../service/subcategory.service';
import { BrandService } from '../service/brand.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-delete-subcategory',
  templateUrl: './delete-subcategory.component.html',
  styleUrls: ['./delete-subcategory.component.css']
})
export class DeleteSubcategoryComponent implements OnInit {

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

  deleteProducts() {
    this.subcategoryService.deleteProductsBySubCategory(this.subId).subscribe(data => {
      console.log(data);
    });
  }

}
