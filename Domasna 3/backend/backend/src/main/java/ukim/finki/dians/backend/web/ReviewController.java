package ukim.finki.dians.backend.web;

import org.springframework.web.bind.annotation.*;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.Visitor;
import ukim.finki.dians.backend.model.helper.ReviewHelper;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.ReviewService;

import java.util.List;

@CrossOrigin("http://localhost:4200")
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
    public List<Review> findAllByUnitId(@PathVariable Long id) {
        return educationUnitService.findAllReviews(id);
    }

    @PostMapping("/addReview/{id}")
    public Review addReview(@PathVariable Long id,
                            @RequestBody ReviewHelper reviewHelper) {

        Visitor visitor = new Visitor(reviewHelper.getName(), reviewHelper.getEmail());
        Review review = new Review( reviewHelper.getRate(), reviewHelper.getComment(), visitor);

        System.out.println("Uspesno kreiran Review = " + review);

        return this.reviewService.save(review, id);
    }
}
