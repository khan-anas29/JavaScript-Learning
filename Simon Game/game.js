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