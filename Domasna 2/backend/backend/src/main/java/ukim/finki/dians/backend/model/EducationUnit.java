package ukim.finki.dians.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import ukim.finki.dians.backend.model.helperFront.EducationUnitForListHelperFront;
import ukim.finki.dians.backend.model.helperFront.SpecificEducationUnitHelperFront;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class EducationUnit {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String city;
    private String street;
    private String type;
    private String phone;
    private String website;
    private Double lat;
    private Double lon;

    @OneToMany
    private List<Review> reviews;

    public EducationUnit() {
        reviews = new ArrayList<>();
    }

    public EducationUnit(String name, String city, String street, String type, String phone, String website, Double lat, Double lon) {
        this.name = name;
        this.city = city;
        this.street = street;
        this.type = type;
        this.phone = phone;
        this.website = website;
        this.lat = lat;
        this.lon = lon;
        reviews = new ArrayList<>();
    }

    public EducationUnitForListHelperFront getAsEducationUnitForListFrontHelper(){
        EducationUnitForListHelperFront educationUnitForListHelperFront = new EducationUnitForListHelperFront();
        educationUnitForListHelperFront.setId(id);
        educationUnitForListHelperFront.setName(name);
        educationUnitForListHelperFront.setCity(city);
        educationUnitForListHelperFront.setStreet(street);
        educationUnitForListHelperFront.setType(type);
        educationUnitForListHelperFront.setPhone(phone);
        educationUnitForListHelperFront.setWebsite(website);
        educationUnitForListHelperFront.setLat(lat);
        educationUnitForListHelperFront.setLon(lon);
        return educationUnitForListHelperFront;
    }

    public SpecificEducationUnitHelperFront getAsSpecificEducationUnitHelperFront(){
        SpecificEducationUnitHelperFront specificEducationUnitHelperFront = new SpecificEducationUnitHelperFront();
        specificEducationUnitHelperFront.setId(id);
        specificEducationUnitHelperFront.setName(name);
        specificEducationUnitHelperFront.setCity(city);
        specificEducationUnitHelperFront.setStreet(street);
        specificEducationUnitHelperFront.setType(type);
        specificEducationUnitHelperFront.setPhone(phone);
        specificEducationUnitHelperFront.setWebsite(website);
        specificEducationUnitHelperFront.setLat(lat);
        specificEducationUnitHelperFront.setLon(lon);
        Double average = this.reviews.stream().mapToInt(Review::getGrade).average().orElse(0.00);
        specificEducationUnitHelperFront.setReviewAverage(average);
        return specificEducationUnitHelperFront;
    }
}
