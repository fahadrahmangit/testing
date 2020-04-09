import { Component, OnInit } from '@angular/core';
import { Product } from '../modelDto/productmodel';
import { Subcategory } from '../model/subcategory';
import { ProductDTO } from '../modelDto/ProductDTO';
import { ProductService } from '../service/product.service';
import { BrandService } from '../service/brand.service';
import { Brand } from '../model/brand';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  showtable = true;
  products: Product[];
  showcreateproduct = false;
  items: Subcategory[];
  brands: Brand[];
  catid: number;
  subcatid: number;
  brandid: number;
  product: Product;
  subcategory: Subcategory;
  subname: string;
  productDTO: ProductDTO;
  productfromexceldto: ProductDTO[];

  constructor(private productService: ProductService, private brandService: BrandService) { }

  ngOnInit() {
      this.refreshtable();
  }

  selectcategory(category) {
    console.log(category.target.value);
    this.catid = category.target.value;
    this.brandService.getSubcategory(this.catid).subscribe(data => {
    this.items = data;
    console.log(this.items);
     });
  }
  getsubcategory(subcategory) {
    console.log(subcategory.target.selectedOptions[0].text);
    this.subname = subcategory.target.selectedOptions[0].text;
    this.subcatid = subcategory.target.value;

    this.brandService.getBrand(this.subcatid).subscribe(data => {
      this.brands = data;
      console.log(this.items);
       });
  }
  getbrand(brand) {
    console.log(brand.target.value);
    this.brandid = brand.target.value;

  }
  createproduct() {
    this.showtable = false;
    this.showcreateproduct = true;
  }
  onSubmit(productform) {
    console.log(productform.form.value.name);
    console.log(productform.form.value.image);
    console.log(productform.form.value.price);
    console.log(productform.form.value.mrp);
    this.productDTO = new ProductDTO(productform.form.value.name, productform.form.value.image, this.brandid, productform.form.value.price,
      productform.form.value.mrp, this.subcatid);
    this.productService.createproduct(this.productDTO).subscribe(data => {
      this.productfromexceldto = data;
      this.refreshtable();
      this.showcreateproduct = false;
      this.showtable = true;

    });
  }

  refreshtable() {
    this.productService.findall().subscribe(data =>      {
      this.productfromexceldto = data;
     });
  }

}
