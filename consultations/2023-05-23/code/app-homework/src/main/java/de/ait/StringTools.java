package de.ait;

public abstract class StringTools {
  public static String firstToUpperCase(String str) {
    // "forest" -> "Forest"
    // "car" -> "Car"
    // сделали метод, но с ошибкой substring(0, 2)
    // str.isBlank()  "", " "
    // str.isEmpty()  "" то есть length == 0
    if(str.isEmpty() || str.isBlank()){
      return str;
    }
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
  public static boolean isStartingFromCapital(String str){
     return Character.isUpperCase(str.charAt(0));
  }
}
