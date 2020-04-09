export class ProductFromExcelDto {

   id: number;
   name: string;
   brandId: number;
   brandName: string;
   subCategoryId: number;
   subCategoryName: string;
   categoryId: number;
   categoryName: string;
   price: number;


  // tslint:disable-next-line: max-line-length
  constructor(id: number, name: string, brandId: number, brandName: string, subCategoryId: number, subCategoryName: string, categoryId: number, categoryName: string, price: number) {
     this.id = id;
     this.name = name;
     this.brandId = brandId;
     this.brandName = brandName;
     this.subCategoryId = subCategoryId;
     this.subCategoryName = subCategoryName;
     this.categoryId = categoryId;
     this.categoryName = categoryName;
     this.price = price;
  }
}
