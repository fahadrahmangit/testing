export class SupplierProduct {

  brandId: number;
  supplierId: string;
  vendorId: string;
  products: number[];

  constructor(brandId: number, supplierId: string, vendorId: string, products: number[]) {
    this.brandId = brandId;
    this.supplierId = supplierId;
    this.vendorId = vendorId;
    this.products = products;
  }
}
