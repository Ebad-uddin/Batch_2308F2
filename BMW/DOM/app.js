// DOM (Document Object Model)

// console.log(document.head);

// DOM manipulation 

/* 1) getElementById()

 let box = document.getElementById("box");
 box.append("This is a text inserted by javascript DOM")
 console.log(box);
*/


/* 
2) getElementsByTagName()

 let div = document.getElementsByTagName('div');
 console.log(div[1]);

*/

/* 
3) getElementsByclassName()

let className = document.getElementsByClassName('box');
 className.forEach((i,e) => {
   console.log(e.i)
 });
console.log(className);
 for(let i = 0; i < className.length; i++){
          console.log(className[i]);
        
  }
*/
/* 

4) queryselector() used to select the top most element of same class, tag, attribute 

4) queryselectorAll() used to select all the elements of the same classes/attribute/tags

*/        
// function insert(){

//         let box = document.querySelectorAll('.box')[1];
//         let box1 = document.querySelectorAll('.box1');
//         let img = document.querySelectorAll('#image');
//         let btn = document.querySelectorAll('#btn');
//         console.log(box);
//         console.log(box1);
//         console.log(img);
//         console.log(btn);
        
//         box.innerHTML = " <h1> this text is inserted with the help of JS </h1>"
        
// }


// Data insertion w.r.t JS
        
// function data_display(){
// // getting elements using JS methods
//         let head = document.getElementById('head');
//         let para = document.getElementById('para');
//         let footer = document.getElementById('foot');

//         // setting the inner text of the above elements

//         console.log(head, para, footer);
//         head.innerText = "this is heading section";
//         para.innerText = "this is paragraph section"
//         footer.innerText = "this is footer section"

// }       

// function display_data(){
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let pass = document.getElementById('pass').value;
//   let container = document.getElementById('container');
//   console.log(name, email, pass);
//   container.innerHTML = "Name: " + name + "<br> Email: " + email + "<br>Password: " + pass;
//   container.style.backgroundColor = "black";
//   container.style.color = "white";
//   container.style.padding = "40px"
//   container.style.width = "500px"
//   container.style.margin = "0 auto"
//   container.style.border = "2px solid red"
// }

// localStorage.getItem()   used to retreive the data from localStorage 
// localStorage.setItem('name', 'Ebad');   used to insert the data into localStorage
  
// function insertdata(){

//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let pass = document.getElementById('pass').value;
//   localStorage.setItem('name', name);
//   localStorage.setItem('email', email);
//   localStorage.setItem('pass', pass);
//   // let username = localStorage.getItem('name');
//   console.log(username);
//   document.write(username);
// }

// setting the object data into localstorage after converting into JSONFormat

// let user_record = {
//   name : "Ebad",
//   Age : 33,
//   Email : "ebad@gmail.com"
// }

// let convert_to_JSON = JSON.stringify(user_record)

// localStorage.setItem('userdata', convert_to_JSON)

// // Fetching the data form localstorage ;

// let user_details = localStorage.getItem('userdata')
// let JSON_to_obj = JSON.parse(user_details);
// document.write(JSON_to_obj);
// console.log(JSON_to_obj);
// for(let i in JSON_to_obj){
//   document.write(JSON_to_obj[i] + "<br>")
// }


// localStorage.setItem('name', 'Ebad');
// sessionStorage.setItem('name', 'Ebad');

let std = {
  name : "ebad",
  Pass : "ebad123"
}

let student = JSON.stringify(std);
localStorage.setItem("data", student);


let data = localStorage.getItem('data');
;
console.log(JSON.parse(data));

















