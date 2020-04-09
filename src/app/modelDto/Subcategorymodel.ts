export class Subcategory {
  id: number;
  name: string;
  enabled: number;
  catid: number;
   // tslint:disable-next-line: align
   constructor(id: number, name: string, enabled: number, catid: number) {
     this.id = id;
     this.name = name;
     this.enabled = enabled;
     this.catid = catid;
    }

    }
