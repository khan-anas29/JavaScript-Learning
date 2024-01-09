// BMi using If Else
/*
Bmi=weight/height*height */

// Take 2 inputs from user

var weight;
var height;

function CalcBMI(weight,height){

    var BMI=Math.round(weight/(height*height))

    if(BMI < 18.5){
        return `Your BMI is ${BMI}, You are Under weight`
    }
    if(BMI>=18.5 && BMI<=24.9){
        return `Your BMI is ${BMI}, You are Normal weight`
    }
    if(BMI>24.9){
        return `Your BMI is ${BMI}, You are Over weight`
    }
}

var bmiValue=CalcBMI(75,1.8)
console.log(bmiValue);
