package org.example;

public class RemoveDoublePhoneNumbersFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String [] parts = input.split(",");
        if(parts.length!=1){
            if(parts[5].split(";").length>1){
                String rez=parts[0]+","+parts[1]+","+parts[2]+","+parts[3]+","+parts[4]+","+parts[5].split(";")[0]
                        +","+parts[6]+","+parts[7]+","+parts[8]+","+parts[9]+","+parts[10];
                return rez;
            }
            return input;
        }
        return "";
    }
}
