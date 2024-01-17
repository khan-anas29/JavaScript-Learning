// defined colors
var buttonColors=["red","blue","green","yellow"]

// Empty Array for Game Patterns
var gamePattern=[]

var userClickedPattern=[]

// Initializing it as a false so no key will detect while one is already press
var started= false;

var level = 0

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level"+level)
        nextSequence()
        started=true
    } 
    
});


// Getting which button is pressed
$(".btn").click(function(){
    
    // this will give which color is clicked by providing its id
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor)
    // console.log(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    
});

// generating Next Sequence
function nextSequence() {

    level++

    $("#level-title").text("Level"+level)

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColor)

}

// Making Sound Function
function playSound(name){
    var audio= new Audio("sounds/" + name + ".mp3")
    audio.play()
}


// Animation To Buttons

function animatePress(currentColor) { 
    $("."+currentColor).addClass("pressed");
    setTimeout(() => {
        $("."+currentColor).removeClass("pressed");
    }, 100);
 }


