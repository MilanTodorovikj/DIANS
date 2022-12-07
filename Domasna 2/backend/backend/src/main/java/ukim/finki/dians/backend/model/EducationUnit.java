package ukim.finki.dians.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import ukim.finki.dians.backend.model.helperFront.EducationUnitHelperFront;

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

    public EducationUnitHelperFront getAsFrontHelper(){
        EducationUnitHelperFront educationUnitHelperFront = new EducationUnitHelperFront();
        educationUnitHelperFront.setId(id);
        educationUnitHelperFront.setName(name);
        educationUnitHelperFront.setCity(city);
        educationUnitHelperFront.setStreet(street);
        educationUnitHelperFront.setType(type);
        educationUnitHelperFront.setPhone(phone);
        educationUnitHelperFront.setWebsite(website);
        educationUnitHelperFront.setLat(lat);
        educationUnitHelperFront.setLon(lon);
        return educationUnitHelperFront;
    }
}
