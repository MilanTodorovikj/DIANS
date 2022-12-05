package ukim.finki.dians.backend.web;

import org.springframework.web.bind.annotation.*;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.ReviewService;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;
    private final EducationUnitService educationUnitService;

    public ReviewController(ReviewService reviewService, EducationUnitService educationUnitService) {
        this.reviewService = reviewService;
        this.educationUnitService = educationUnitService;
    }

    @GetMapping("/findAll/{id}")
    public List<Review> findAllByUnitId(@PathVariable Long id){
        return educationUnitService.findAllReviews(id);
    }

}
