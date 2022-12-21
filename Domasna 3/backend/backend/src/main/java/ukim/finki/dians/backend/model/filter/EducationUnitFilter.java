package ukim.finki.dians.backend.model.filter;

import lombok.Data;

@Data
public class EducationUnitFilter {
    String type;
    String city;
    Boolean sort;

    public EducationUnitFilter(String city, String type,  Boolean sort) {
        this.type = type;
        this.city = city;
        this.sort = sort;
    }
}


