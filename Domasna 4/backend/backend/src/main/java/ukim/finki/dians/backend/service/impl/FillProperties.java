package ukim.finki.dians.backend.service.impl;

import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.service.EducationUnitService;

import java.io.*;
import java.util.Scanner;

@Service
public class FillProperties {

    private final EducationUnitService educationUnitService;

    public FillProperties(EducationUnitService educationUnitService) {
        this.educationUnitService = educationUnitService;
    }

    public void init() throws IOException {
        Scanner scanner = new Scanner(new File("src/main/resources/static/resultFinal.csv"));

        String line;
        while(scanner.hasNextLine()){
            line = scanner.nextLine();
            String [] parts = line.split(",");

            educationUnitService.save(parts[0],parts[1],parts[2],parts[3],parts[4],parts[5],Double.parseDouble(parts[6]),Double.parseDouble(parts[7]));
        }

    }
}
