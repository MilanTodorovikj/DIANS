package org.example;

public class RemoveEmptyFieldsFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String [] parts = input.split(",");
        if(parts.length!=1){
            String rez="";
            for(int i=0;i<parts.length;i++){
                if(i==0){
                    rez+=parts[i];
                }
                else if(i!=9 && i!=10){
                    rez+=","+parts[i];
                }
            }
            return rez;
        }

        return "";
    }
}
