import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductDTO } from '../modelDto/ProductDTO';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  myControl = new FormControl();
  options: ProductDTO[];
  value: string;
  recommentationId: number;
  recommededProducts: ProductDTO[];
  tableDisplay = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

getSearchValue() {
  console.log(this.myControl.value);
  this.recommentationId = this.myControl.value;
  this.productService.findRecommendationProducts(this.recommentationId).subscribe(data => {
    this.recommededProducts = data;
    this.tableDisplay = true;
  });
}

  onKey(event: any) { // without type info
    this.value = event.target.value ;
    if (this.value.length > 2) {
      console.log(this.value);
      this.productService.findAutocompleteByName(this.value).subscribe(data => {
        this.options = data;
      });
    }
  }
}
