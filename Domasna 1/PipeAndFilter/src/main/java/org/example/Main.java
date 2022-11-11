package org.example;

import java.io.*;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) throws IOException {
        Pipe<String> pipe = new Pipe<>();
        WithNameFilter withNameFilter = new WithNameFilter();
        RemoveEmptyFieldsFilter removeEmptyFieldsFilter = new RemoveEmptyFieldsFilter();
        RemoveDoublePhoneNumbersFilter removeDoublePhoneNumbersFilter = new RemoveDoublePhoneNumbersFilter();
        RemoveItemsWithoutCategoryFilter removeItemsWithoutCategoryFilter = new RemoveItemsWithoutCategoryFilter();

        File file = new File("src/main/resources/resultDraft.csv");
        if (file.exists())
            file.delete();

        File resultFile = new File("src/main/resources/resultDraft.csv");
        PrintWriter filePrintWriter = new PrintWriter(resultFile);

        pipe.addFilter(withNameFilter);
        pipe.addFilter(removeEmptyFieldsFilter);
        pipe.addFilter(removeDoublePhoneNumbersFilter);
        pipe.addFilter(removeItemsWithoutCategoryFilter);

        Scanner scanner = new Scanner(new File("src/main/resources/info1.csv"));

        scanner.useDelimiter(",");

        while (scanner.hasNextLine()) {
            String line = pipe.runFilter(scanner.nextLine());
            if (!line.equals(""))
                filePrintWriter.println(line);
        }

        scanner.close();
        filePrintWriter.flush();
        filePrintWriter.close();

        SetEmptyFields setEmptyFields = new SetEmptyFields();
        setEmptyFields.execute();

    }

    static class Building {
        String name;
        String city;
        String address;
        double lon;
        double lat;
        String amenity;
        String website;
        String phone;

        public Building() {
        }

        public Building(String name, String address, String city, String website, String phone, String amenity, double lat, double lon) {
            this.name = name;
            this.city = city;
            this.address = address;
            this.lon = lon;
            this.lat = lat;
            this.amenity = amenity;
            this.website = website;
            this.phone = phone;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public void setLon(double lon) {
            this.lon = lon;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }

        public void setAmenity(String amenity) {
            this.amenity = amenity;
        }

        @Override
        public String toString() {
            return String.format("%s,%s,%s,%s,%s,%s,%f,%f", name, address, city, amenity, phone, website, lat, lon);
        }
    }
}