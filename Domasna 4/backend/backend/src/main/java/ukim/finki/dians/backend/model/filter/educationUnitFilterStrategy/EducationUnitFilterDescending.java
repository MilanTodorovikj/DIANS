package ukim.finki.dians.backend.model.filter.educationUnitFilterStrategy;

import org.springframework.stereotype.Component;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.filter.EducationUnitFilter;
import ukim.finki.dians.backend.model.helper.helperFront.SpecificEducationUnitHelperFront;
import ukim.finki.dians.backend.repository.EducationUnitRepository;

import java.util.Comparator;
import java.util.List;

@Component
public class EducationUnitFilterDescending implements EducationUnitFilterStrategy{
    private final EducationUnitRepository educationUnitRepository;

    public EducationUnitFilterDescending(EducationUnitRepository educationUnitRepository) {
        this.educationUnitRepository = educationUnitRepository;
    }

    @Override
    public List<SpecificEducationUnitHelperFront> filter(EducationUnitFilter educationUnitFilter) {
        return this.educationUnitRepository.filter(educationUnitFilter).stream().map(EducationUnit::getAsSpecificEducationUnitHelperFront).sorted(Comparator.comparing(SpecificEducationUnitHelperFront::getReviewAverage)).toList();
    }
}
