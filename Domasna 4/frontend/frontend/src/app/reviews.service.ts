import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "./Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  url: string = "http://localhost:8080/review";

  constructor(private http: HttpClient) {
  }

  getReviews(id: number) {
    return this.http.get<Review[]>(`${this.url}/findAll/${id}`);
  }

  addReview(id: number, formData: any) {
    return this.http.post(`${this.url}/addReview/${id}`, formData);
  }
}
