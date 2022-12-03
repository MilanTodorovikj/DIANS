package ukim.finki.dians.backend.service.impl;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.exceptions.EducationUnitNotFound;
import ukim.finki.dians.backend.model.filters.EducationUnitFilter;
import ukim.finki.dians.backend.repository.EducationUnitRepository;
import ukim.finki.dians.backend.service.EducationUnitService;

import java.util.List;

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
    public List<EducationUnit> findAll() {
        return educationUnitRepository.findAll();
    }

    @Override
    public EducationUnit findById(Long id) {
        if(educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        return educationUnitRepository.findById(id).get();
    }

    @Override
    public EducationUnit save(EducationUnit educationUnit) {
        return this.educationUnitRepository.save(educationUnit);
    }

    @Override
    public void deleteById(Long id) {
        if(educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        this.educationUnitRepository.deleteById(id);
    }

    @Override
    @Transactional
    public EducationUnit editById(Long id,EducationUnit educationUnit) {
        if(this.educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        this.educationUnitRepository.deleteById(id);
        return this.educationUnitRepository.save(educationUnit);
    }

    @Override
    public List<EducationUnit> filter(EducationUnitFilter educationUnitFilter) {
        return this.educationUnitRepository.filter(educationUnitFilter);
    }

    @Override
    public List<Review> findAllReviews(Long id) {
        if(this.educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        EducationUnit educationUnit = this.educationUnitRepository.findById(id).get();
        return educationUnitRepository.getAllReviews(educationUnit);
    }
}
