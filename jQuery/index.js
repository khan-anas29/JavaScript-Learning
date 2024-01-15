// document.querySelector("h1")
// // this is same as
// jQeuery("h1")
// // which is also same as
// $("h1"); No difference while selecting one and queryselectorAll in jQuery


/*Adding css using js is not good practice instead we can add class using this js which had all the css required  */

// $("h1").css("color","green")

// var headingColor=$("h1").css("color");
// console.log(headingColor);


// Adding Css using  jQuery

$("h1").addClass("big-text")
$("button").addClass("btn")

// Manipulating Text
/* .innerHTML ==> html() in jQuery */

$("button").text("Click Me")
$("h1").html("<em>Hello</em>")

// Manipulating Attributes
$("a").attr("href","https://www.youtube.com")

// Adding Event Listeners

// Manually

/*for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="black"
    })
}*/

// With jQuery

$("button").click(function(){
    $("h1").css("color","black")
})


// Getting Button which is beign pressed

/*document.addEventListener("keypress",function(event){
    // console.log(event.key); //this will show which key is beign pressed
})*/ 

$(document).keypress(function(event){
        $("h1").text(event.key)
})


// Better Method to Add Event Listeners

$("h1").on("click",function(){
    $("h1").addClass("big-text-bg")
})