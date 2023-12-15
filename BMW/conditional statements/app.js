
/*
if(condition){
    statement to be execute
}
*/
// const nationality = prompt("enter your nationality");
// const religion = prompt("enter your religion");
// if(nationality == "Pakistani" && religion == "Muslim"){
//     document.write("you are eligible for vote");
// }
// else 
// if(nationality == "indian" || religion == "hindu"){
//     document.write("you are not eligible for vote");
// }
// else{
//     document.write("Please enter the correct nationality");
// }

// let age = +prompt("Enter your age");


// ternery operator
// let variable = condition? statment1 if condition true : statement2 if condition false;

//  output = (age >= 18)? "you are eligible for vote" : "you are not eligible";
// document.write(output);

// if(age >= 18){
//     let drive =  prompt("Can drive");
//     if(drive == "yes"){
//         document.write("you can avail the driving license");
        
//     }else{
//         document.write("you cannot drive the car");

//     }
// }else{
//     document.write("Pehle bary hojaen");
// }


// switch case
let input = prompt("Enter number from 1-7");
switch (input) {
    case "1":
        document.write("its monday")
        break;
    case "2":
        document.write("its tuesday")
        break;
    case "3":
        document.write("its wednesday")
        break;
    case "4":
        document.write("its thursday")
        break;
    case "5":
        document.write("its friday")
        break;
    case "6":
        document.write("its saturday")
        break;
    case "7":
        document.write("its sunday")
        break;
    default:
        document.write("Please enter the correct input value");
        break;
}




