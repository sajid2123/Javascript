/**
 *  QUESTION:
 * 1.Create a variable of the type string and try to add a number to it.
 * 2.Use typeof operator to fing the datatype of the string in last question 
 * 3.create a const object in javascrpt. Can you change it to hold a number later?
 * 4.Try to add a new key to the const object in problem 3.were you able to do it.
 * 5.Write a js program to create a word-meaning dictionary of 5 words.
 */

//1->
let a = "Sajid";
let b = 6;
console.log(a + b);
//2->
console.log(typeof a);
//3-> No, because its a const and you can not update it
const c = {
    name: "Sajid",
    age: 20,
}
//4. Yes, you can do it.
c[`name`] = "Viktor"
//5.
const dict = {
    appreciate: "recognize the full worth of",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work"
}
console.log(dict);
