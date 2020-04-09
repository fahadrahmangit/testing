import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { VendorService } from '../service/vendor.service';
import { BrandDTO } from '../modelDto/brandDTO';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

  vendorList: Vendor[];
  brandList: BrandDTO[];
  display = false;
  brandId;
  brandName;
  vendorId;

  constructor(private vendorService: VendorService, private brandService: BrandService) { }

  ngOnInit() {
  }

  getVendor(cat) {
    console.log(cat.target.value);
    this.vendorService.getAllVendorByCategoryId(cat.target.value).subscribe(data => {
      this.vendorList = data;
      console.log(this.vendorList);
    });
  }

  getBrand(venId) {
    console.log(venId.target.value);
    this.vendorId = venId.target.value;
    this.brandService.getAllBrandsByVendorId(venId.target.value).subscribe(data => {
      this.brandList = data;
    });
  }

  confirmation(ven) {
    console.log(ven.target.selectedOptions[0]);
    if (ven.target.value !== 'null') {
      this.display = true;
      this.brandId = ven.target.value;
      this.brandName = ven.target.selectedOptions[0].text;
    }
  }

  addProducts() {
    this.vendorService.addProductsByVendor(this.brandId, this.vendorId).subscribe(data => {
      console.log(data);
    });
  }

}
