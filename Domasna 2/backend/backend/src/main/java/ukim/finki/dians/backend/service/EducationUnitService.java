package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.EducationUnit;

public interface EducationUnitService {
    EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon);
}
