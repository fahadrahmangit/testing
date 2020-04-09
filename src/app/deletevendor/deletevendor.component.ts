import { Component, OnInit } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { BrandService } from '../service/brand.service';
import { Vendor } from '../model/vendor';

@Component({
  selector: 'app-deletevendor',
  templateUrl: './deletevendor.component.html',
  styleUrls: ['./deletevendor.component.css']
})
export class DeletevendorComponent implements OnInit {

  vendorList: Vendor[];
  display = false;
  vendorId;
  vendorName;

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

  confirmation(ven) {
    console.log(ven.target.selectedOptions[0]);
    if (ven.target.value !== 'null') {
      this.display = true;
      this.vendorId = ven.target.value;
      this.vendorName = ven.target.selectedOptions[0].text;
    }
  }

  deleteProducts() {
    this.vendorService.deleteProductsByVendor(this.vendorId).subscribe(data => {
      console.log(data);
    });
  }

}
