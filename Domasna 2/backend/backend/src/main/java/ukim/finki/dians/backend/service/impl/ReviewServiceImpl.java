package ukim.finki.dians.backend.service.impl;


import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.repository.ReviewRepository;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.ReviewService;
import ukim.finki.dians.backend.service.VisitorService;


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

}
