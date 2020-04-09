export class BrandSupplierDTO {
  supplierId: string;
  brandIds: number[];
   constructor(supplierid: string, brandids: number[]) {
     this.supplierId = supplierid;
     this.brandIds = brandids;
   }
    }
