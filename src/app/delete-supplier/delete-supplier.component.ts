import { Component, OnInit } from '@angular/core';
import { Supplier } from '../model/supplier';
import { Productdto } from '../model/productdto';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  supplierList: Supplier[];
  display = false;
  displayTable = false;
  productList: Productdto[];
  supId;

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.getAllSupplier().subscribe(data => {
      this.supplierList = data;
    });
  }

  getSupplier(supplierId) {
    if (supplierId.target.value !== 'null') {
      this.display = true;
      this.supId = supplierId.target.value;
    }
  }

  deleteProducts() {
    this.supplierService.deleteProductsBySupplier(this.supId).subscribe(data => {
      this.productList = data;
      this.displayTable = true;
    });
  }

}
