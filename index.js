// Fibonacci Challenge
function CalcFib(n) {
    if (n===1){
        output=[0]
    }
    else if(n===2){
        output=[0,1]
    }
    else{
        output=[0,1]
        for (i = 2; i < n; i++){
            // Calculate sum of previous two
           output.push(output[output.length-1]+output[output.length-2])
        }
    }
    return output
}

var a=CalcFib(5)
console.log(a);
var b=CalcFib(10)
console.log(b);