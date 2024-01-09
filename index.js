// Leap Year Challenge
/*
year is a leap if it is clearly divisible by 4 unless it is not divisible by 100 and if also divisible by 100 then should be divisible by 400
 */

// Take input

var year;

function isLeap(year){
    if (year%4===0) {
        if (year%100===0) {
            if(year%400===0){
                console.log("Leap Year");
            }
            else{
                console.log("Not a Leap Year");
            }
        } else {
            console.log("Leap Year");
        }
    }
    else{
        console.log("Not a Leap Year");
    }
}

isLeap(2004);
isLeap(2013);
isLeap(2022);
isLeap(2024);
isLeap(2100);

