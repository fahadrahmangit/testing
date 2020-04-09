export class ProductDTO {

  name: string;
  imageLink: string;
  brandId: number;
  price: DoubleRange;
  mrp: DoubleRange;
  subCategoryId: number;
constructor( name: string, imageLink: string, brandid: number, price: DoubleRange, mrp: DoubleRange, subcategory: number) {
  this.name = name;
  this.imageLink = imageLink;
  this.price = price;
  this.mrp = mrp;
  this.brandId = brandid;
  this.subCategoryId = subcategory;
}
}
