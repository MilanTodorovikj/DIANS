package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.filter.EducationUnitFilter;
import ukim.finki.dians.backend.model.helperFront.EducationUnitForListHelperFront;
import ukim.finki.dians.backend.model.helperFront.SpecificEducationUnitHelperFront;

import java.util.List;

public interface EducationUnitService {
    EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon);

    List<EducationUnitForListHelperFront> findAll();

    SpecificEducationUnitHelperFront findForFrontById(Long id);

    List<Review> findAllReviews(Long id);

    EducationUnit save(EducationUnit educationUnit);

    void deleteById(Long id);

    EducationUnit editById(Long id, EducationUnit educationUnit);

    List<SpecificEducationUnitHelperFront> filter(EducationUnitFilter educationUnitFilter);

    EducationUnit findById(Long id);

    List<EducationUnit> search(String term);
}
