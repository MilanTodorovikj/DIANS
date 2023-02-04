package ukim.finki.dians.backend.model.filter.educationUnitFilterStrategy;

import ukim.finki.dians.backend.model.filter.EducationUnitFilter;
import ukim.finki.dians.backend.model.helper.helperFront.SpecificEducationUnitHelperFront;

import java.util.List;

public interface EducationUnitFilterStrategy {

    List<SpecificEducationUnitHelperFront> filter(EducationUnitFilter educationUnitFilter);
}
