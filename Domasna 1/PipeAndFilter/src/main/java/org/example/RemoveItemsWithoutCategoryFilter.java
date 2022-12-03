package org.example;

public class RemoveItemsWithoutCategoryFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String [] parts = input.split(",");
        if(parts.length!=1){
            if(parts[6].equals("") && parts[7].equals("")){
                return "";
            }
        }
        return input;
    }
}