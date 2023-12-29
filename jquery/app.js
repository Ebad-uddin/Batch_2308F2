$(document).ready(function(){

let para = $('#para');
let hidebtn = $('#hidebtn');
let showbtn = $('#showbtn');
let toggle = $('#toggle');

// console.log(para, btn)

// hide show and toggle methods demostration

// hidebtn.click(function(){
//     para.hide(2000, function(){
//         alert("hide method called");
//     });
// })
// showbtn.click(function(){
//     para.show(3000, function(){
//         console.log("<h1>show method called</h1>");
//     });
// })

// toggle.click(function(){
//     para.toggle();
// })

// light and dark mode 
// let box = $('#box');
// let darkbtn = $('#dark');
// let lightbtn = $('#light');

// darkbtn.click(function(){
//     box.css({"background-color" : "black", "color" : "white"})
// })
// lightbtn.click(function(){
//     box.css({"background-color" : "white", "color" : "black"})
// })

// jquery methods

// let box1 = $('.box1')
// let box2 = $('.box2')
// let box3 = $('.box3')
// $('#fadeout').click(function(){
//     box1.fadeOut()
//     box2.fadeOut('slow')
//     box3.fadeOut(2000)
// })
// $('#fadein').click(function(){
//     box1.fadeIn()
//     box2.fadeIn('slow')
//     box3.fadeTo(2000, 0.2)
// })
// $('#fadetoggle').click(function(){
//     box1.fadeToggle()
//     box2.fadeToggle('slow')
//     box3.fadeToggle(2000)
// })

// Getting elements text html and values by jquery 



// let box1 = $('.box1').text()
// let box2 = $('.box2').html()
// let box3 = $('.box3')
// let fname = $('#fname').val();
// let attr = $('#fname').attr('placeholder');
// console.log(box1, box2, fname, attr);


let fname = $('#fname')
let lname = $('#lname')
let email = $('#email')
let submit = $('#submit')
let myform = $('#myform');
let msg = $('#msg');

submit.click(function(e){
    e.preventDefault()
    // console.log(fname.val(), lname.val(), email.val());
    msg.html("FirstName : " + fname.val() + "<br>" + "LastName : " +   lname.val() +"<br>" + "Email : " + email.val());
    myform.trigger("reset");

})










})