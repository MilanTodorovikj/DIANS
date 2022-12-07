package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.helperFront.EducationUnitHelperFront;

import java.util.List;

public interface EducationUnitService {
    EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon);

    List<EducationUnitHelperFront> findAll();

    EducationUnitHelperFront findById(Long id);

    List<Review> findAllReviews(Long id);
}
