import {Visitor} from "./Visitor";

export class Review {

  id: number;
  grade: number;
  comment: string;
  date: Date;
  visitor: Visitor;

  constructor(id: number, grade: number, comment: string, date: Date, visitor: Visitor) {

    this.id = id;
    this.grade = grade;
    this.comment = comment;
    this.date = date;
    this.visitor = visitor;
  }

}
