export class Brand {

  id: number;
  name: string;
  enabled: number;
  subcategoryId: number;
  rank: number;

  constructor(id: number , name: string , enabled: number, subcategoryId: number, rank: number) {
    this.id = id;
    this.name = name;
    this.enabled = enabled;
    this.subcategoryId = subcategoryId;
    this.rank = rank;
  }
}
