// Fibonacci Challenge



function CalcFib(n) {
    var t1=0;
    var t2=1;
    var t3;
    var output=[];
    if (n===1){
        output=[t1]
    }
    else if(n===2){
        output=[t1,t2]
    }
    else{
        output=[t1,t2]
        for (i = 2; i < n; i++){
            t3=t1+t2
            t1=t2
            t2=t3
            output.push(t3)
        }
    }
    return output
}

var a=CalcFib(10)
console.log(a);
var b=CalcFib(10)
console.log(b);