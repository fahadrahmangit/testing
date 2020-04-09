export class ProtSupplrVendrDTO {
  supplierId: string;
  vendorId: string;
  categoryId: number;
  subCategoryId: number;
  brandId: number;

 constructor(supplierId: string, vendorId: string, categoryId: number, subCategoryId: number, brandId: number) {
   this.subCategoryId = subCategoryId;
   this.vendorId = vendorId;
   this.categoryId = categoryId;
   this.supplierId = supplierId;
   this.brandId = brandId;
 }
}
