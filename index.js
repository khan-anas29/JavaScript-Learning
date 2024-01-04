// Random Number Generator
/*
Creating Fun Love calculator random generating numbers */

// Take 2 inputs from user
var name1;
var name2;

function loveCal() {
    // We need in range of 1 to 100
    var num=Math.random() * 100
    num=Math.floor(num)
    num=num+1
    console.log(num+"%");
}

loveCal()
