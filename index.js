// Fibonacci Challenge
var firstnum = 0;
var secondnum = 1;

var output = []

function FibonacciSeries(n) {
    for (var i = 0; i < n; i++) {
        if (i === 0) {
            output.push(firstnum)
        }
        else if (i === 1) {
            output.push(secondnum)
        }
        else{
            thirdnum=([i-2]+[i-1])
            output.push(thirdnum)
        }
    }
    console.log(output);
}

FibonacciSeries(5)
FibonacciSeries(3)
