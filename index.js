removeAllNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

buildDice = (numberBalls, numberPlayer) => {

    let divPlayer = document.getElementById('dicePlayer' + numberPlayer);
    removeAllNodes(divPlayer);

    if (numberBalls === 1) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-1');

        divPlayer.appendChild(ballNumber1);

    } else if (numberBalls === 2) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-2-1');

        let ballNumber2 = document.createElement("div");
        ballNumber2.classList.add('dice-ball');
        ballNumber2.classList.add('number-2-2');

        divPlayer.appendChild(ballNumber1);
        divPlayer.appendChild(ballNumber2);
    } else if (numberBalls === 3) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-3-1');

        let ballNumber2 = document.createElement("div");
        ballNumber2.classList.add('dice-ball');
        ballNumber2.classList.add('number-3-2');

        let ballNumber3 = document.createElement("div");
        ballNumber3.classList.add('dice-ball');
        ballNumber3.classList.add('number-3-3');

        divPlayer.appendChild(ballNumber1);
        divPlayer.appendChild(ballNumber2);
        divPlayer.appendChild(ballNumber3);
    } else if (numberBalls === 4) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-4-1');

        let ballNumber2 = document.createElement("div");
        ballNumber2.classList.add('dice-ball');
        ballNumber2.classList.add('number-4-2');

        let ballNumber3 = document.createElement("div");
        ballNumber3.classList.add('dice-ball');
        ballNumber3.classList.add('number-4-3');

        let ballNumber4 = document.createElement("div");
        ballNumber4.classList.add('dice-ball');
        ballNumber4.classList.add('number-4-4');

        divPlayer.appendChild(ballNumber1);
        divPlayer.appendChild(ballNumber2);
        divPlayer.appendChild(ballNumber3);
        divPlayer.appendChild(ballNumber4);
    } else if (numberBalls === 5) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-5-1');

        let ballNumber2 = document.createElement("div");
        ballNumber2.classList.add('dice-ball');
        ballNumber2.classList.add('number-5-2');

        let ballNumber3 = document.createElement("div");
        ballNumber3.classList.add('dice-ball');
        ballNumber3.classList.add('number-5-3');

        let ballNumber4 = document.createElement("div");
        ballNumber4.classList.add('dice-ball');
        ballNumber4.classList.add('number-5-4');

        let ballNumber5 = document.createElement("div");
        ballNumber5.classList.add('dice-ball');
        ballNumber5.classList.add('number-5-5');

        divPlayer.appendChild(ballNumber1);
        divPlayer.appendChild(ballNumber2);
        divPlayer.appendChild(ballNumber3);
        divPlayer.appendChild(ballNumber4);
        divPlayer.appendChild(ballNumber5);
    } else if (numberBalls === 6) {

        let ballNumber1 = document.createElement("div");
        ballNumber1.classList.add('dice-ball');
        ballNumber1.classList.add('number-6-1');

        let ballNumber2 = document.createElement("div");
        ballNumber2.classList.add('dice-ball');
        ballNumber2.classList.add('number-6-2');

        let ballNumber3 = document.createElement("div");
        ballNumber3.classList.add('dice-ball');
        ballNumber3.classList.add('number-6-3');

        let ballNumber4 = document.createElement("div");
        ballNumber4.classList.add('dice-ball');
        ballNumber4.classList.add('number-6-4');

        let ballNumber5 = document.createElement("div");
        ballNumber5.classList.add('dice-ball');
        ballNumber5.classList.add('number-6-5');


        let ballNumber6 = document.createElement("div");
        ballNumber6.classList.add('dice-ball');
        ballNumber6.classList.add('number-6-6');

        divPlayer.appendChild(ballNumber1);
        divPlayer.appendChild(ballNumber2);
        divPlayer.appendChild(ballNumber3);
        divPlayer.appendChild(ballNumber4);
        divPlayer.appendChild(ballNumber5);
        divPlayer.appendChild(ballNumber6);
    }


}

let randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
let randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;

buildDice(randomNumberPlayer1, 1);
buildDice(randomNumberPlayer2, 2);

let title = document.querySelector('.title');

if (randomNumberPlayer1 > randomNumberPlayer2) {
    title.innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumberPlayer2 > randomNumberPlayer1) {
    title.innerHTML = "Player 2 Wins! 🚩";
} else {
    title.innerHTML = "Draw!";
}
