export class Product {

id: number;
name: string;
imageLink: string;
brandId: number;
price: number;
mrp: number;
distance: number;
position: number;
enabled: number;

constructor(id: number, name: string, imageLink: string, brandId: number, price: number, mrp: number, distance: number, position: number) {
  this.id = id;
  this.name = name;
  this.imageLink = imageLink;
  this.brandId = brandId;
  this.price = price;
  this.distance = distance;
  this.position = position;
  this.mrp = mrp;
}

}
