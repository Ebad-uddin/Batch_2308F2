// Arrays

// 1st syntax
let classs = ["yousuf", "zubair", "talha", "abubakar", "huzaifa"];
// document.write(length + "<br>");

// 2nd syntax

let number = new Array(
  10,
  20,
  30,
  45,
  58,
  67,
  79,
  81,
  94,
  10,
  44,
  34,
  65,
  45,
  23,
  66,
  88,
  33,
  345,
  767,
  234,
  67,
  34
);
let length = number.length;
console.log(length);
// for (let i = 0; i < number.length; i++){
//     document.write( i + ") "  +  number[i] + "<br>");
// }

// 3rd method
// let colors = [];
// colors[0] = "red"
// colors[1] = "blue"
// colors[2] = "black"
// colors[3] = "yellow"
// for (let j = 0; j < 4; j++){
//     document.write( j + ") "  +  colors[j] + "<br>");
// }

// foreach loop

// colors.forEach(element => {
//     document.write(element + "<br>");
// });

// User Functions

/* 
functionkeyword functionName(){
 statements/logics
}
function must be invoke

*/
function add() {
  let a = 5;
  let b = 5;
  let res = a + b;
  document.write(res);
}
// document.write("the addition is");      // function called
// add();

// function with return statement

function sub() {
  let a = 5;
  let b = 5;
  let res = a - b;
  return res;
}

// document.write("<br>");      // function called
// let result =  sub();
// document.write(result);      // function called

// function with parameters

// function fullname(num1, num2){
//     let addition = num1 + num2
//     let multiply = num1 * num2
// document.write("your addition is: " + addition + "<br>");
// document.write("your multiplication is: " + multiply + "<br>");
// }

// fullname(3, 4)
// fullname(6, 12)
// fullname("ali ", "ahmed <br>")
// fullname("Talha ", "mughal <br>")

// let colors = ["red", "blue", "green", "orange", "purple"];

// function getarray(array) {
//   document.write("<h1>program to print the array</h1>");
//   array.forEach((element) => {
//     document.write(element + "<br>");
//   });
// }
// getarray(colors);

/* 
-- object --
 generalize form:

let obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"
}

calling the object key
objectName.ObjKey => output => (value of the key)

*/

let intro = {
  name: "Ebad", //property
  email: "ebad@gmail.com",
  age: 27,
  Education:["Inter PreEng", "BSC" , "MCS"],
  address: {
    permanent_Add : "house#3333 block-D22 north nazimabad Karachi",
    Temporary_Add : "flat - A376 Block - 12 gulistan-e-johar Karachi" 
  }
}


//  intro.Education.forEach(e => {
//     document.write(e + "<br>");    
//  })

// // document.write(edu);
// document.write(intro.Education)
// console.log(intro);

/* 
for in loop
for(let variableName in ObjName){
    statement
}

*/
// for(let x in intro){
//     document.write(intro[x] + "<br>");
// }



// Arrow functions ES-6

let addition = (a) => {

  a.forEach(e => {
    document.write(e + "<br>");
    
  });

}
addition([2, 3, 4,5, 6, 77, 43, 21])










