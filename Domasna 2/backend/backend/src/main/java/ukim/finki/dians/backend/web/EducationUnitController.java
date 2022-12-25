package ukim.finki.dians.backend.web;

import org.springframework.web.bind.annotation.*;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.helperFront.EducationUnitForListHelperFront;
import ukim.finki.dians.backend.model.helperFront.SpecificEducationUnitHelperFront;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.impl.FillProperties;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/educationUnit")
public class EducationUnitController {
    private final FillProperties fillProperties;
    private final EducationUnitService educationUnitService;

    public EducationUnitController(FillProperties fillProperties, EducationUnitService educationUnitService) {
        this.fillProperties = fillProperties;
        this.educationUnitService = educationUnitService;
    }

    //Run only once at first start for filling database
    @GetMapping("/init")
    public void init() throws IOException {
        this.fillProperties.init();
    }

    @GetMapping("/all")
    public List<EducationUnitForListHelperFront> findAll(){
        return this.educationUnitService.findAll();
    }

    @GetMapping("/{id}")
    public SpecificEducationUnitHelperFront findById(@PathVariable Long id){
        return this.educationUnitService.findById(id);
    }

//    @GetMapping("/search/{searchInput}")
//    public List<EducationUnit> findByName (@PathVariable String searchInput){
//        List<EducationUnit> educationUnitList = new ArrayList<>();
//        for (EducationUnit educationUnit : educationUnitService.findAll()){
//            if (educationUnit.getName().contains(searchInput)){
//                educationUnitList.add(educationUnit);
//            }
//        }
//        return educationUnitList;
//    }
}
