package org.example;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class SetEmptyFields {
    public void execute() throws IOException {
        Scanner scanner = new Scanner(new File("src/main/resources/resultDraft.csv"));
        scanner.nextLine();

        List<Main.Building> buildings = new ArrayList<>();

        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            String[] parts = line.split(",");
            if (!parts[6].equals(""))
                buildings.add(new Main.Building(parts[1], parts[2], parts[3], parts[4], parts[5], parts[6],
                        Double.parseDouble(parts[9]), Double.parseDouble(parts[10])));
            else if (!parts[7].equals("")) {
                buildings.add(new Main.Building(parts[1], parts[2], parts[3], parts[4], parts[5], parts[7],
                        Double.parseDouble(parts[9]), Double.parseDouble(parts[10])));
            }
        }

        BufferedReader s = new BufferedReader(new FileReader(new File("src/main/resources/info2.csv")));
        String line;
        while ((line = s.readLine())!=null) {
            String[] parts = line.split(",");
            double lat = Double.parseDouble(parts[3]);
            double lon = Double.parseDouble(parts[4]);
            Main.Building building;
            if(!parts[0].equals("")){
                if (buildings.stream().filter(b -> b.lat == lat && b.lon == lon).collect(Collectors.toList()).size()>0) {
                    building = buildings.stream().filter(b -> b.lat == lat && b.lon == lon).collect(Collectors.toList()).get(0);
                    building.setName(parts[0]);
                    building.setAddress(parts[1]);
                    building.setCity(parts[2]);
                }
            }
        }
        scanner.close();
        s.close();

        File file = new File("src/main/resources/resultFinal.csv");
        file.delete();

        PrintWriter printWriter = new PrintWriter(new File("src/main/resources/resultFinal.csv"));
        buildings.forEach(b -> printWriter.println(b));
        printWriter.flush();
        printWriter.close();

    }
}
