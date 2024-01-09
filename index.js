// 99 Bottles Challenge

function Bottles99() {
    for (bottles=100; bottles>0;bottles--) {

        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of the beer.\nTake one down and pass it around,${bottles - 1} bottles of beer on the wall.\n`);
        bottles--;
    }
}

Bottles99()