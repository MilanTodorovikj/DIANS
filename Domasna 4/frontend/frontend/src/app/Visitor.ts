export class Visitor {
  id: number;
  fullName: string;
  mail: string;

  constructor(id: number, fullName: string, mail: string) {
    this.id = id;
    this.fullName = fullName;
    this.mail = mail;
  }
}
