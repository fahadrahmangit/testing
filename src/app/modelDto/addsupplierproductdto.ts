export class AddSupplierProductDto {
  brandId: number;
  supplierId: string;
  vendorId: string;
  productIds: number[];

  constructor(brandId: number, supplierId: string, vendorId: string, productIds: number[]) {
      this.brandId = brandId;
      this.supplierId = supplierId;
      this.vendorId = vendorId;
      this.productIds = productIds;
  }
}
