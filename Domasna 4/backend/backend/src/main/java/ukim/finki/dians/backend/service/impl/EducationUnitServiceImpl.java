package ukim.finki.dians.backend.service.impl;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.Review;
import ukim.finki.dians.backend.model.exceptions.EducationUnitNotFound;
import ukim.finki.dians.backend.model.filter.EducationUnitFilter;
import ukim.finki.dians.backend.model.filter.educationUnitFilterStrategy.EducationUnitFilterAscending;
import ukim.finki.dians.backend.model.filter.educationUnitFilterStrategy.EducationUnitFilterDescending;
import ukim.finki.dians.backend.model.filter.educationUnitFilterStrategy.EducationUnitFilterStrategy;
import ukim.finki.dians.backend.model.helper.helperFront.EducationUnitForListHelperFront;
import ukim.finki.dians.backend.model.helper.helperFront.SpecificEducationUnitHelperFront;
import ukim.finki.dians.backend.repository.EducationUnitRepository;
import ukim.finki.dians.backend.service.EducationUnitService;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    public SpecificEducationUnitHelperFront findForFrontById(Long id) {
        if (educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        return educationUnitRepository.findById(id).get().getAsSpecificEducationUnitHelperFront();
    }

    @Override
    public List<Review> findAllReviews(Long id) {
        if (this.educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        EducationUnit educationUnit = this.educationUnitRepository.findById(id).get();
        return educationUnitRepository.getAllReviews(educationUnit);
    }

    @Override
    public EducationUnit save(EducationUnit educationUnit) {
        return this.educationUnitRepository.save(educationUnit);
    }

    @Override
    public void deleteById(Long id) {
        if (educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        this.educationUnitRepository.deleteById(id);
    }

    @Override
    @Transactional
    public EducationUnit editById(Long id, EducationUnit educationUnit) {
        if (this.educationUnitRepository.findById(id).isEmpty())
            throw new EducationUnitNotFound(id);
        EducationUnit eu = this.educationUnitRepository.findById(id).get();
        eu.setName(educationUnit.getName());
        eu.setCity(educationUnit.getCity());
        eu.setStreet(educationUnit.getStreet());
        eu.setType(educationUnit.getType());
        eu.setPhone(educationUnit.getPhone());
        eu.setWebsite(educationUnit.getWebsite());
        eu.setLat(educationUnit.getLat());
        eu.setLon(educationUnit.getLon());
        return this.educationUnitRepository.save(eu);
    }

    @Override
    public List<SpecificEducationUnitHelperFront> filter(String city, String type, Boolean sort) {
        EducationUnitFilter educationUnitFilter = new EducationUnitFilter(city, type, sort);
        //Strategy Design Pattern for filtering all EducationUnits
        EducationUnitFilterStrategy educationUnitFilterStrategy;
        //If sort in the filter is true get all EducationUnits in ascending order
        //if not then get them in descending order
        if (educationUnitFilter.getSort())
            educationUnitFilterStrategy = new EducationUnitFilterAscending(this.educationUnitRepository);
        else
            educationUnitFilterStrategy = new EducationUnitFilterDescending(this.educationUnitRepository);

        return educationUnitFilterStrategy.filter(educationUnitFilter);
    }

    @Override
    public EducationUnit findById(Long id) {
        return this.educationUnitRepository.findById(id).orElseThrow(() -> new EducationUnitNotFound(id));
    }

    @Override
    public List<EducationUnit> search(String term) {
        return this.educationUnitRepository.findAllByNameContainingIgnoreCase(term);
    }

    @Override
    public List<String> getAllCities() {
        Set<String> cities = this.educationUnitRepository.findAll().stream().map(EducationUnit::getCity).collect(Collectors.toSet());
        cities.remove("");
        return cities.stream().toList();
    }


}
