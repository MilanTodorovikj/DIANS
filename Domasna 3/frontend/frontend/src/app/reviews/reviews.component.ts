import { Component } from '@angular/core';
import {ReviewsService} from "../reviews.service";
import {Review} from "../Review";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  id: number = 1;
  reviews: Review[] = [];
  constructor(private route: ActivatedRoute, private reviewService: ReviewsService) {
  }

  ngOnInit() {
    this.route
      .params.subscribe(s => {
        // console.log(s["id"]);
        this.id = s["id"];
      }
    )

    this.reviewService.getReviews(this.id).subscribe(
      (response) =>{
        this.reviews=response;
        // console.log(response);
      }
    )
  }


}
