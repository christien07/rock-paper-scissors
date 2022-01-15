console.log("Can you hear me?");

function computerPlay() {
    let num = Math.floor(Math.random()*100);
    console.log(num);

    if(num >= 67) {
        return 'Rock';
    } else if(num < 67 && num > 33) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

computerPlay();