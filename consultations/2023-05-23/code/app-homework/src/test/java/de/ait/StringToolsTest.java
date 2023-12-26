package de.ait;

import org.junit.jupiter.api.*;


import static de.ait.StringTools.firstToUpperCase;
import static org.junit.jupiter.api.Assertions.*;

class StringToolsTest {
  @Nested
  @DisplayName("tests for firstToUpper")
  class ForFirstToUpper{
    @Test
    @DisplayName("firstToUpperCase(\"apple\") -> \"Apple\"")
    public void firstToUpperCase_test1(){
      // Вариант 1, подробно и поэтапно
      // arrange
//    String input = "apple";
//    String expectedResult = "Apple";
//    // act
//    String actualResult = StringTools.firstToUpperCase(input);
//    // assert
//    assertEquals(expectedResult, actualResult);
      // Вариант 2, все то же, но в одну строку
      assertEquals("Apple", StringTools.firstToUpperCase("apple"));
    }
    @Test
//  @Disabled // Можно отключить при помощи этой аннотации
    @DisplayName("firstToUpperCase(\"Jungles\") -> \"Jungles\"")
    public void firstToUpperCase_test2(){
//    String expectedRes = "Jungles";
//    String input = "Jungles";
//    String actualRes = StringTools.firstToUpperCase(input);
//    assertEquals(expectedRes, actualRes);
      // firstToUpperCase() без класса благодаря импорту
      // import static de.ait.StringTools.firstToUpperCase;
      assertEquals("Jungles", firstToUpperCase("Jungles"));
    }
  }
  @Nested
  @DisplayName("tests for isStartingFromCapital")
  class ForIsStartingFromCapital{
    @Test
    @DisplayName("isStartingFromCapital(\"friend\") -> false")
    public void isStartingFromCapital_test1(){
      assertFalse(StringTools.isStartingFromCapital("friend"));
    }
    @Test
    @DisplayName("isStartingFromCapital(\"Fiend\") -> true")
    public void isStartingFromCapital_test2(){
      assertTrue(StringTools.isStartingFromCapital("Fiend"));
    }
  }


}