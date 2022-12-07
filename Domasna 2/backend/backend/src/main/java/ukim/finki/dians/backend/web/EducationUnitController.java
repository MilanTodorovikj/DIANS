package ukim.finki.dians.backend.web;

import org.springframework.web.bind.annotation.*;
import ukim.finki.dians.backend.model.helperFront.EducationUnitHelperFront;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.impl.FillProperties;

import java.io.IOException;
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
    public List<EducationUnitHelperFront> findAll(){
        return this.educationUnitService.findAll();
    }

    @GetMapping("/{id}")
    public EducationUnitHelperFront findById(@PathVariable Long id){
        return this.educationUnitService.findById(id);
    }

}
