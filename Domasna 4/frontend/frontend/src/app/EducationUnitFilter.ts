export class EducationUnitFilter {
  city: string;
  type: string;
  sort: boolean;

  constructor() {
    this.city = '';
    this.type = '';
    this.sort = true;
  }
}
