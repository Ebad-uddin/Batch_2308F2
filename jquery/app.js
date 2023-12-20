$(document).ready(function(){

let para = $('#para');
let hidebtn = $('#hidebtn');
let showbtn = $('#showbtn');

// console.log(para, btn)

hidebtn.click(function(){
    para.hide();
})
showbtn.click(function(){
    para.show();
})



})