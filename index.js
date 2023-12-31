// KarelChallenge for Functions
/* Put beaker in 5*5 diagonal */

function main(){
    putBeeper();
  move();
    second();
    second();
    second();
    second();
 }
 
 function second(){
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
 }