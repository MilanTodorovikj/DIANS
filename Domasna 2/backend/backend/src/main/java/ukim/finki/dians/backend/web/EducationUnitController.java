package ukim.finki.dians.backend.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ukim.finki.dians.backend.service.impl.FillProperties;

import java.io.IOException;

@RestController()
@RequestMapping("/educationUnit")
public class EducationUnitController {
    private final FillProperties fillProperties;

    public EducationUnitController(FillProperties fillProperties) {
        this.fillProperties = fillProperties;
    }

    //Run only once at first start for filling database
    @GetMapping("/init")
    public void init() throws IOException {
        this.fillProperties.init();
    }
}
