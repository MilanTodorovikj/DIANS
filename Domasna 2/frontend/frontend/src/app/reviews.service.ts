import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "./Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  url: string = "http://localhost:8080/review/findAll/";

  constructor(private http: HttpClient) {
  }

  getReviews(id: number) {
    return this.http.get<Review[]>(this.url + id);
  }
}
