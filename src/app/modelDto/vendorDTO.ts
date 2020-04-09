export class Vendor {
  id: string;
  name: string;
  enabled: number;
  address: string;
  constructor(id: string, name: string, enabled: number, address: string) {
   this.id = id;
   this.name = name;
   this.enabled = enabled;
   this.address = address;
    }
}
