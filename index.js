// BMI Calculator
/*
Bmi = wieght in kg / height * height in metre */

function bmiCalculation(weight,height) {
    var bmiCalc= (weight/(height*height))
    return bmiCalc
}


var bmi=bmiCalculation(56,1.8)
console.log(bmi);
