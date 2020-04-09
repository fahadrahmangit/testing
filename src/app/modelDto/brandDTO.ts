export class BrandDTO {
  id: number;
  name: string;
  enabled: number;
  rank: number;
  subCategoryId: number;
  checked: boolean;

  constructor(id: number, name: string, enabled: number, rank: number, subCategoryId: number, checked: boolean) {
    this.id = id;
    this.name = name;
    this.enabled = enabled;
    this.rank = rank;
    this.subCategoryId = subCategoryId;
    this.checked = checked;
  }
}
