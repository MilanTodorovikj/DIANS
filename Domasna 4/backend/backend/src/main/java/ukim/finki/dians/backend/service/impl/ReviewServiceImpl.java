package ukim.finki.dians.backend.service.impl;


import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.Visitor;
import ukim.finki.dians.backend.repository.ReviewRepository;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.ReviewService;
import ukim.finki.dians.backend.service.VisitorService;

import java.time.LocalDate;


@Service
public class ReviewServiceImpl implements ReviewService {
    private final EducationUnitService educationUnitService;
    private final ReviewRepository reviewRepository;
    private final VisitorService visitorService;

    public ReviewServiceImpl(EducationUnitService educationUnitService, ReviewRepository reviewRepository, VisitorService visitorService) {
        this.educationUnitService = educationUnitService;
        this.reviewRepository = reviewRepository;
        this.visitorService = visitorService;
    }

    @Override
    @Transactional
    public Review save(Review review, Long id) {
        EducationUnit educationUnit = educationUnitService.findById(id);
        educationUnit.getReviews().add(review);
        Visitor visitor = visitorService.save(review.getVisitor().getFullName(),review.getVisitor().getMail());
        review.setVisitor(visitor);
        review.setDate(LocalDate.now());
        return reviewRepository.save(review);
    }
}
