// Life in Week

var age;

function lifeInWeek(age){
    var ageInDays=365*age
    var ageInWeek=52*age
    var ageInMonths=12*age

    var ageLeftInDays = (365*90)-ageInDays
    var ageLeftInWeek = (52*90)-ageInWeek
    var ageLeftInMonths = (12*90)-ageInMonths

    console.log(`You have ${ageLeftInDays} Days, ${ageLeftInWeek} weeks, ${ageLeftInMonths} months left `);
}

lifeInWeek(21);
lifeInWeek(56);

