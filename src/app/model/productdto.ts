export class Productdto {

  public id: number;
  public name: string;
  public distance: number;
  public supplierName: string ;
  public position: number;
  public brandName: string;
  public price: number;

  constructor(id: number, name: string, distance: number, supplierName: string, position: number, brandName: string, price: number) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.position = position;
    this.supplierName = supplierName;
    this.brandName = brandName;
    this.price = price;
  }

  }
