//Coercion implicita
var a = 4 + "7";
typeof a; //String
var b = 4 * 7;
typeof b;//number


//Coercion explicita
var a = 20;
var b = a + "";
var c = String(a); //Para convertir un number en un string atraves del metodo String()
var d = Number(c);//Para convertir un String en un number atraves del metodo Number()

