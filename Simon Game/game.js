// Empty Array for Game Patterns
var gamePattern=[]

// defined colors
var buttonColors=["red","blue","green","yellow"]

var userClickedPattern=[]

// Getting which button is pressed
$(".btn").click(function(){
    
    // this will give which color is clicked by providing its id
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor)
    // console.log(userChosenColor);

    playSound(userChosenColor);
    
});

// generating Next Sequence
function nextSequence() {

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