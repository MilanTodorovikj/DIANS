import {Component} from '@angular/core';
import {ReviewsService} from "../reviews.service";
import {Review} from "../Review";
import {ActivatedRoute} from "@angular/router";
import {ReloadService} from "../reload.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent {

  id = 1;
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute,
              private reviewService: ReviewsService,
              private reloadService: ReloadService) {
    this.reloadService.reload$.subscribe(() => {this.ngOnInit()});
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params["id"];})
    this.reviewService.getReviews(this.id).subscribe(response => this.reviews = response)
  }

}
