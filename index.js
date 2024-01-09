// 99 Bottles Challenge

var bottles = 100

function Bottles99() {
    while (bottles > 0) {

        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of the beer.\nTake one down and pass it around,${bottles - 1} bottles of beer on the wall.\n`);
        bottles--;
    }
}

Bottles99()