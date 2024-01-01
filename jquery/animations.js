$(document).ready(function(){
    
    let button = $('#btn');
    let box = $('.box');
    // console.log(button, box);
    button.mouseenter(function(){
        // method chaining

        // selector.animate(animationProperty, duration, callbackfunction);

        box.animate({left : '500px'}, 2000, function(){
            box.html("box").css({'color' : 'white', 'fontSize':'30px', 'marginTop' : '10px', 'borderRadius' : '200px'})
        }).animate({ top : '200px'})
    })

})