"use strict";

// $(document).ready(function(){
// console.log("jquery ");
// });

$("#target").click(function(){
    console.log("click for button");
})
$("#onther").click(function (){
    console.log("onther click for btn");
})

$(document).ready(function(){
    console.log("hello..");
})

// Both is work perfectly 
// $(document).ready(function(){
//     let test = $("#test").html();
//     console.log(test);
// })
$(function (){
    let test = $("#test").html();
    console.log(test);
})