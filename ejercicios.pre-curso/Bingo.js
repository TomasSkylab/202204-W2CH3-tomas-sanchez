let bingoCard = [
    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },
];

let numsRepited = [];
let turn = 0;
let numberGenerated = 0;
let numsBingo = Array(90)
    .fill()
    .map((element, index) => index + 1);
let lineCompleted1 = false;
let lineCompleted2 = false;
let lineCompleted3 = false;
let sumLines = 0;

function bingoGame() {
    getUserName();
    theCarton();
    bingo();
}

const getUserName = () => {
    alert("BIENVENIDO AL BINGO ISDI CODERS!!");
    playerName = prompt("Cual es tu nombre de usuario?");
    if (!playerName) {
        return getUserName();
    }
    alert(
        `Hola ${playerName}.La puntuacion parte de 500 puntos y en cada turno se te iran restanto 10 puntos`
    );
};

function desordenarBombo() {
    numsBingo.sort(function () {
        return Math.random() - 0.5;
    });
}

function randomNum() {
    return Math.ceil(Math.random() * (90 - 1));
}

function theCarton() {
    turn = 0;

    for (i = 0; i < bingoCard.length; i++) {
        do {
            bingoCard[i].number = randomNum();
            numsRepited.push(bingoCard[i].number);
            bingoCard[i].matched = false;
        } while (bingoCard[i].number === numsRepited[i]);
    }

    let verification = prompt(
        `¿TE GUSTA ESTE CARTÓN PARA JUGAR? ESCRIBE 'YASS' PARA CONTINUAR, 'NOPE' PARA GENERAR OTRO CARTÓN.`
    );

    if (verification.toUpperCase() === "NOPE") {
        theCarton();
    } else if (verification.toUpperCase() === "YASS") {
    } else {
        theCarton();
    }
}

function checkNumbers() {
    desordenarBombo();
    let numberGenerated = numsBingo.shift();

    for (i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i].number === numberGenerated) {
            bingoCard[i].matched = true;
            bingoCard[i].number = "X";
        }
    }
}

function bingo() {
    turn += 1;
    checkNumbers();
    checkLines();

    let seguimos = confirm("¿Seguimos jugando? PULSA ACEPTAR");

    if (seguimos === true) {
        bingo();
    } else {
    }
}

function checkLines() {
    let line1 = 0;
    let line2 = 0;
    let line3 = 0;

    for (i = 0; i < bingoCard.length; i++) {
        if (
            bingoCard[0].matched == true &&
            bingoCard[1].matched == true &&
            bingoCard[2].matched == true &&
            bingoCard[3].matched == true &&
            bingoCard[4].matched == true
        ) {
            line1++;
        }
        if (
            bingoCard[5].matched == true &&
            bingoCard[6].matched == true &&
            bingoCard[7].matched == true &&
            bingoCard[8].matched == true &&
            bingoCard[9].matched == true
        ) {
            line2++;
        }
        if (
            bingoCard[10].matched == true &&
            bingoCard[11].matched == true &&
            bingoCard[12].matched == true &&
            bingoCard[13].matched == true &&
            bingoCard[14].matched == true
        ) {
            line3++;
        }
    }

    if (line1 === 15 && lineCompleted1 === false) {
        if (sumLines === 0) {
            alert(lineArt());

            lineCompleted1 = true;
            sumLines++;
        } else {
            lineCompleted1 = true;
            sumLines++;
        }
    }

    if (line2 === 15 && lineCompleted2 === false) {
        if (sumLines === 0) {
            alert(lineArt());

            lineCompleted2 = true;
            sumLines++;
        } else {
            lineCompleted2 = true;
            sumLines++;
        }
    }

    if (line3 === 15 && lineCompleted3 === false) {
        if (sumLines === 0) {
            lineCompleted3 = true;
            sumLines++;
        } else {
            lineCompleted3 = true;
            sumLines++;
        }
    }

    if (
        lineCompleted1 === true &&
        lineCompleted2 === true &&
        lineCompleted3 === true
    ) {
        ranking();
    }
}

let rankingPlayers = [
    { name: "Aitor", puntos: 100 },
    { name: " Adrian", puntos: 250 },
    { name: "Ignasi", puntos: 150 },
    { name: "Eva", puntos: 50 },
];

function ranking() {
    let turnScore = turn * 10;
    let score = 500 - turnScore;

    rankingPlayers.push({ name: playerName, puntos: score });

    let rankingOrganized = rankingPlayers.sort(function (a, b) {
        return a.puntos - b.puntos;
    });

    playAgain();
}

function playAgain() {
    let newGame = prompt(
        `¿QUIERES VOLVER A JUGAR? ESCRIBE 'YASS' PARA NUEVO JUEGO, 'NOPE' PARA ACABAR.`
    );

    if (newGame.toUpperCase() === "NOPE") {
        alert(`GRACIAS POR JUGAR AL BINGO ISDI CODERS`);
    } else if (newGame.toUpperCase === "YASS") {
        alert(`JUGUEMOS DE NUEVO!! BUENA SUERTE!`);

        getUserName();
        theCard();
        numsBingoo = Array(90)
            .fill()
            .map((element, index) => index + 1);
        line1 = 0;
        line2 = 0;
        line3 = 0;
        lineCompleted1 = false;
        lineCompleted2 = false;
        lineCompleted3 = false;
        bingo();
    } else {
        playAgain();
    }
}

bingoGame();
