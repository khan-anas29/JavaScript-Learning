// Empty Array for Game Patterns
var gamePattern=[]

// defined colors
var buttonColors=["red","blue","green","yellow"]

// Choosing Random Colors
var randomChosenColors=buttonColors[nextSequence()]

// Adding Random color in Empty array
gamePattern.push(randomChosenColors)

// Generate Random Number between 0 and 3
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber
}

// Adding Flash Effect to Button which is beign Matched
switch (randomChosenColors) {
    case "red":
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        break;
    case "blue":
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        break;
    case "green":
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        break;
    case "yellow":
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        break;

    default:
        console.log("None");
        break;
}