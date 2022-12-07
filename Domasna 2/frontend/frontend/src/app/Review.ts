export class Review {

  id: number;
  grade: number;
  comment: string;
  date: Date;

  constructor(id: number,grade: number,comment: string,date: Date) {
    this.id=id;
    this.grade=grade;
    this.comment=comment;
    this.date=date;
  }

}
