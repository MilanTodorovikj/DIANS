export class EducationUnit {
  id: number;
  name: string;
  city: string;
  street: string;
  type: string;
  phone: string;
  website: string;
  lat: number;
  lon: number;

  constructor(id: number, name: string, city: string, street: string, type: string, phone: string, website: string, lat: number, lon: number) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.street = street;
    this.type = type;
    this.phone = phone;
    this.website = website;
    this.lat = lat;
    this.lon = lon;
  }
}
