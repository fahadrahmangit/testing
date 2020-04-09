import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../service/supplier.service';
import { Subcategory } from '../model/subcategory';
import { SupplierDTO } from '../modelDto/supplierDTO';
import { BrandSupplierDTO } from '../modelDto/brandsupplierDTO';
import { NgForm } from '@angular/forms';
import { BrandService } from '../service/brand.service';
import { BrandDTO } from '../modelDto/brandDTO';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  showeditsupplier = false;
  showtable = true;
  showcreatesupplier = false;
  showbrands = false ;
  supplierform: NgForm;
  returnstring: string;
  items: Subcategory[];
  catid: number;
  subid: number;
  suppliers: SupplierDTO[] = [];
  brands: BrandDTO[];
  brandids = [];
  supplierid: string;
  brandidd: number;
  brandSupplierDTO: BrandSupplierDTO;
  supplier: SupplierDTO;

    constructor(private supplierService: SupplierService, private brandService: BrandService) { }

  ngOnInit() {
    this.refreshtable();
  }
  refreshtable() {
  this.supplierService.getAllSuppliers().subscribe(data => {
    data.forEach(x => {
      this.supplier = new SupplierDTO(x.id, x.name, x.enabled, x.address, x.subCategoryId);
      console.log(this.supplier);
      this.suppliers.push(this.supplier);
    });
    });
}

  onSubmit(supplierform) {
      console.log(supplierform.form.value.suppliername);
      console.log(supplierform.form.value.supplieraddress);
      console.log(supplierform.form.value.supplierphone);
      this.supplier = new SupplierDTO(supplierform.form.value.supplierphone, supplierform.form.value.suppliername, 0, 
        supplierform.form.value.supplieraddress, this.subid);
      this.supplierService.createsupplier(this.supplier).subscribe(data => {
        this.returnstring = data;
        this.suppliers = [];
        this.refreshtable();
        this.showcreatesupplier = false;
        this.showtable = true;
      });

       }

  selectcategory(category) {
    console.log(category.target.value);
    this.catid = category.target.value;
    this.brandService.getSubcategory(this.catid).subscribe(data => {
    this.items = data;
    console.log(this.items);
     });
  }

  showbrandss(supplierid) {
    this.showtable = false;
    this.showbrands = true;
    this.supplierid = supplierid;
    console.log(supplierid);
    this.brandService.getAllBrands(supplierid).subscribe(data => {
       this.brands = data;
       console.log(this.brands);
    });

  }


  getsubcategory(subcategory)  {
    console.log(subcategory.target.value);
    this.subid = subcategory.target.value;

  }

  createsupplier() {
    this.showtable = false;
    this.showcreatesupplier = true;
  }

  editPartyRolesSubmit() {
    const Checkedrole = this.brands.filter(x => x.checked === true);
    this.brandids = [];
    Checkedrole.forEach(role => {
      this.brandidd = role.id;
      this.brandids.push(role.id);
      });
    console.log(this.supplierid);
    this.brandSupplierDTO = new BrandSupplierDTO(this.supplierid, this.brandids);
    this.supplierService.brandsupplier(this.brandSupplierDTO).subscribe(data => {
        console.log(data);
      });
    this.showbrands = false;
    this.showtable = true;
    }

deletesupplier(supplierid) {
this.supplierService.deletesupplier(supplierid).subscribe(data => {
  this.suppliers = [];
  this.refreshtable();

});
}

editsupplier(supplierid) {
  this.supplierid = supplierid;
  this.showtable = false;
  this.showeditsupplier = true;
}
editsupplierform(supplierform) {
  console.log(supplierform.form.value.suppliername);
  console.log(supplierform.form.value.supplieraddress);

  this.supplier = new SupplierDTO(this.supplierid, supplierform.form.value.suppliername, 1, supplierform.form.value.supplieraddress,
    this.subid);
  this.supplierService.editsupplier( this.supplier).subscribe(data => {
    console.log(data);
    this.suppliers = [];
    this.refreshtable();
    this.showeditsupplier = false;
    this.showtable = true;
      });

    }

}
