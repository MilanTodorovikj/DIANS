package ukim.finki.dians.backend.service.impl;

import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.exceptions.EducationUnitNotFound;
import ukim.finki.dians.backend.model.helperFront.EducationUnitForListHelperFront;
import ukim.finki.dians.backend.model.helperFront.SpecificEducationUnitHelperFront;
import ukim.finki.dians.backend.repository.EducationUnitRepository;
import ukim.finki.dians.backend.service.EducationUnitService;

import java.util.List;
import java.util.Optional;

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

    @Override
    public List<EducationUnitForListHelperFront> findAll() {
        return educationUnitRepository.findAll()
                .stream().map(EducationUnit::getAsEducationUnitForListFrontHelper).toList();
    }

    @Override
    public SpecificEducationUnitHelperFront findById(Long id) {
        if(educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        return educationUnitRepository.findById(id).get().getAsSpecificEducationUnitHelperFront();
    }

    @Override
    public Optional<EducationUnit> findByName(String name){
        return educationUnitRepository.findByName(name);
    }

    @Override
    public List<Review> findAllReviews(Long id) {
        if(this.educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        EducationUnit educationUnit = this.educationUnitRepository.findById(id).get();
        return educationUnitRepository.getAllReviews(educationUnit);
    }
}
