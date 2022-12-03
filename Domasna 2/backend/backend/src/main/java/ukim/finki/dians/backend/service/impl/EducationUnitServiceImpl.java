package ukim.finki.dians.backend.service.impl;

import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.repository.EducationUnitRepository;
import ukim.finki.dians.backend.service.EducationUnitService;

@Service
public class EducationUnitServiceImpl implements EducationUnitService {
    private final EducationUnitRepository educationUnitRepository;

    public EducationUnitServiceImpl(EducationUnitRepository educationUnitRepository) {
        this.educationUnitRepository = educationUnitRepository;
    }

    @Override
    public EducationUnit save(String name, String city, String street, String type, String phone, String website, Double lat, Double lon) {
        EducationUnit educationUnit = new EducationUnit(name, city, street, type, phone, website, lat, lon);
        return educationUnitRepository.save(educationUnit);
    }
}
