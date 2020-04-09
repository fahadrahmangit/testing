export class SupplierDTO {
  id: string;
  name: string;
  enabled: number;
  address: string;
  subCategoryId: number;
  constructor(id: string, name: string, enabled: number, address: string, subCategoryId: number) {
   this.id = id;
   this.name = name;
   this.enabled = enabled;
   this.address = address;
   this.subCategoryId = subCategoryId;
    }

  }
