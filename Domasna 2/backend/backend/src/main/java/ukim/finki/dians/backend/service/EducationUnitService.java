package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;

import java.util.List;
import java.util.Optional;

public interface EducationUnitService {
    EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon);

    List<EducationUnit> findAll();

    EducationUnit findById(Long id);

    List<Review> findAllReviews(Long id);

    Optional<EducationUnit> findByName (String name);
}
