$(document).ready(function(){

let para = $('#para');
let hidebtn = $('#hidebtn');
let showbtn = $('#showbtn');
let toggle = $('#toggle');

// console.log(para, btn)

hidebtn.click(function(){
    para.hide(2000, function(){
        alert("hide method called");
    });
})
showbtn.click(function(){
    para.show(3000, function(){
        console.log("<h1>show method called</h1>");
    });
})

toggle.click(function(){
    para.toggle();
})

// light and dark mode 
let box = $('#box');
let darkbtn = $('#dark');
let lightbtn = $('#light');

darkbtn.click(function(){
    box.css({"background-color" : "black", "color" : "white"})
})
lightbtn.click(function(){
    box.css({"background-color" : "white", "color" : "black"})
})



})