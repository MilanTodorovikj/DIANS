package org.example;

public class WithNameFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String [] parts = input.split(",");
        if(!parts[1].equals("")){
            return input;
        }
        return "";
    }
}
