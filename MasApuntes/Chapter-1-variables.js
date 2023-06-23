console.log("JavaScript tutorial 3: var,let and const")
/**
 * What is a variable?
 * A Variable is a container that stores a value. This is very similar to the container used to 
 * rice,water and oats(Treat this as an analogy)
 * 
 * The Value of javascript variable can be changed during the execution of a program.
 * 
 * RULES FOR CHOOSING VARIABLE NAMES:
 * ->Letters,digits,underscores and $ sign allowed
 * ->Must begin with a $,_ or a letter.
 * ->Javascript reserved words cannot be used as a variable.
 * ->Harry & harry are diferent Variables(Case Sensitive)
 * 
 * VAR VS LET IN JAVASCRIPT
 * ->Var is globally scoped while let & const are block scoped
 * ->Var can be updated & re-declared within its scope
 * ->let can be updated but not re-declared
 * ->Const can neither be updated nor be re-declared
 * ->Var Variables are initialized with undefined whereas let and const variables are not initialized 
 * ->Const must be initialized during declaration unlike let and var
 * 
 * 
 */

var a = 45;
var b = "Harry";
var c = true;
var d = undefined;
var e = null;

{
    var b = 65;
    console.log(b);//prints 65
}
console.log(b);//prints 65, it's because of var is globally scoped.

//But if we change var to let 
var a = 45;
let b = "Harry";
let b = "German";// This line gives error because you can not redeclare let
var c = true;
var c = "Viktor";//In this case you can do this because var ca be redeclared
var d = undefined;
var e = null;

{
    let b = 65;
    console.log(b);//Prints 65
}
console.log(b);//Prints Harry, it's let & const are block scoped

const autor = "Sajid" //this is the proper way of declaring const
//const autor = "German"; You cannot redeclare const 
//autor = "Viktor"; Niether can be updated
// const nombre; And you have to initialize the const











