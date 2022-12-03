package ukim.finki.dians.backend.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ukim.finki.dians.backend.model.EducationUnit;
import ukim.finki.dians.backend.model.filters.EducationUnitFilter;
import ukim.finki.dians.backend.service.EducationUnitService;
import ukim.finki.dians.backend.service.impl.FillProperties;

import java.io.IOException;
import java.util.List;

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
    public List<EducationUnit> findAll(){
        return this.educationUnitService.findAll();
    }

    @GetMapping("/{id}")
    public EducationUnit findById(@PathVariable Long id){
        return this.educationUnitService.findById(id);
    }

    @PostMapping(path = "/addNew")
    public EducationUnit addNewEducationUnit(@RequestBody EducationUnit educationUnit){
        return this.educationUnitService.save(educationUnit);
    }

    @DeleteMapping(path="/delete/{id}")
    public void deleteById(@PathVariable Long id){
        this.educationUnitService.deleteById(id);
    }

    @PutMapping(path = "/edit/{id}")
    public EducationUnit editEducationalUnit(@PathVariable Long id,@RequestBody EducationUnit educationUnit){
        return this.educationUnitService.editById(id,educationUnit);
    }

    @GetMapping(path = "/filter")
    public List<EducationUnit> filter(@RequestBody EducationUnitFilter educationUnitFilter){
        return this.educationUnitService.filter(educationUnitFilter);
    }

}