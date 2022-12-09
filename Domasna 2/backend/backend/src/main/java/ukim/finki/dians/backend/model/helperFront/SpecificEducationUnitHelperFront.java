package ukim.finki.dians.backend.model.helperFront;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class SpecificEducationUnitHelperFront {
    private Long id;
    private String name;
    private String city;
    private String street;
    private String type;
    private String phone;
    private String website;
    private Double lat;
    private Double lon;
    private Double reviewAverage;

    public SpecificEducationUnitHelperFront() {
    }

}
