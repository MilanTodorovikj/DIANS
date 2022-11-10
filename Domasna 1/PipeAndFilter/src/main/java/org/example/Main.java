package org.example;

import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {
        Pipe<String> pipe = new Pipe<>();
        WithNameFilter withNameFilter = new WithNameFilter();
        RemoveEmptyFieldsFilter removeEmptyFieldsFilter = new RemoveEmptyFieldsFilter();
        RemoveDoublePhoneNumbersFilter removeDoublePhoneNumbersFilter = new RemoveDoublePhoneNumbersFilter();

        File file = new File("src/main/resources/result.csv");
        file.delete();

        File resultFile = new File("src/main/resources/result.csv");
        PrintWriter filePrintWriter = new PrintWriter(resultFile);

        pipe.addFilter(withNameFilter);
        pipe.addFilter(removeEmptyFieldsFilter);
        pipe.addFilter(removeDoublePhoneNumbersFilter);

        Scanner scanner = new Scanner(new File("src/main/resources/info.csv"));

        scanner.useDelimiter(",");

        while(scanner.hasNextLine()){
            String line = pipe.runFilter(scanner.nextLine());
            if(!line.equals(""))
                filePrintWriter.println(line);
        }

        scanner.close();
        filePrintWriter.flush();
        filePrintWriter.close();
    }
}