// Empty Array for Game Patterns
var gamePattern=[]

// defined colors
var buttonColors=["red","blue","green","yellow"]


// Generate Random Number between 0 and 3
// function nextSequence() {
    
//     var randomNumber = Math.floor(Math.random()*4)
    
//     // Choosing Random Colors
//     var randomChosenColors=buttonColors[randomNumber]
    
//     // Adding Random color in Empty array
//     gamePattern.push(randomChosenColors)


//     // Adding Flash and Sounds Effect to Button which is beign Matched
//     switch (randomChosenColors) {
//         case "red":
//             $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//             var red=new Audio("sounds/red.mp3")
//             red.play()
//             break;
//         case "blue":
//             $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//             var blue=new Audio("sounds/blue.mp3")
//             blue.play()
//             break;
//         case "green":
//             $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//             var green=new Audio("sounds/green.mp3")
//             green.play()
//             break;
//         case "yellow":
//             $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//             var yellow=new Audio("sounds/yellow.mp3")
//             yellow.play()
//             break;
    
//         default:
//             var wrong=new Audio("sounds/wrong.mp3")
//             wrong.play()
//             break;
//     }
// }

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
  
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  }
