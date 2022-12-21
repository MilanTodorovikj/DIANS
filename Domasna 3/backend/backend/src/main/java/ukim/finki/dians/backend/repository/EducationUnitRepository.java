package ukim.finki.dians.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.filter.EducationUnitFilter;

import java.util.List;

@Repository
public interface EducationUnitRepository extends JpaRepository<EducationUnit,Long> {

    @Query("select eu.reviews from EducationUnit eu where " +
            "eu.id=:#{#educationUnit.id}")
    List<Review> getAllReviews(@Param("educationUnit") EducationUnit educationUnit);

    @Query("select eu from EducationUnit eu where" +
            " lower(eu.type) like %:#{#educationUnitFilter.type.toLowerCase()}% " +
            "and lower(eu.city) like %:#{#educationUnitFilter.city.toLowerCase()}%")
    List<EducationUnit> filter(@Param("educationUnitFilter") EducationUnitFilter educationUnitFilter);


    List<EducationUnit> findAllByNameContaining(String term);
}
