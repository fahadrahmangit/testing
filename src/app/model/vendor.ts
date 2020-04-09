export class Vendor {
  id: string;
  name: string;
  address: string;
  categoryId: string;

  constructor(id: string, name: string, address: string, categoryId: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.categoryId = categoryId;
  }
 }
