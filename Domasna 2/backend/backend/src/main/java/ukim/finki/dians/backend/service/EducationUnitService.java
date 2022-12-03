package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.filters.EducationUnitFilter;

import java.util.List;
import java.util.Optional;

public interface EducationUnitService {
    EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon);

    List<EducationUnit> findAll();

    EducationUnit findById(Long id);
    EducationUnit save(EducationUnit educationUnit);

    void deleteById(Long id);

    EducationUnit editById(Long id,EducationUnit educationUnit);

    List<EducationUnit> filter(EducationUnitFilter educationUnitFilter);
}
