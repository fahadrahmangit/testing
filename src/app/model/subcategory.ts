export class Subcategory {

  id: number;
  name: string;
  enabled: number;
  categoryId: number;

  constructor(id: number , name: string , enabled: number, categoryId: number) {
    this.id = id;
    this.name = name;
    this.enabled = enabled;
    this.categoryId = categoryId;
  }
}
