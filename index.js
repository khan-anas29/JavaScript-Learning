// Arrays

/*
Write a program that prints the number from 1 to 100 But for multiples of three print (Fizz) instead of the number and for the multiple of five print (Buzz) and for numbers which are multiple of 3 and 5 both print (FizzBuzz)*/

// for (let index = 1; index <=100; index++) {
//     // console.log(index);  
//     if(index%3===0 && index%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(index%3===0){
//         console.log("Fizz");
//     }  
//     else if(index%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(index);
//     }
// }

var output = []
var count = 1
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("Fizzbuzz")
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    count++
    console.log(output);
}

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()