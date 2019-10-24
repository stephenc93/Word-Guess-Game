document.addEventListener("DOMContentLoaded", function () {

    let answers = ["imhottonight", "pushittothelimit", "shesonfire"];
    let currentAnswer = "";
    let lettersOfAnswer = [];
    let blanks = 0;
    let blanksAndCorrect = [];
    let wrongGuess = [];
    let wins = 0;
    let losses = 0;
    let guessesRemaining = 12;
    let cycle = 0;

    function Game() {
        currentAnswer = answers[cycle];
        cycle++;
        lettersOfAnswer = currentAnswer.split("");
        blanks = lettersOfAnswer.length;
        for (let i = 0; i < blanks; i++) {
            blanksAndCorrect.push("_");
        }
        document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join("  ");
    }

    let introTheme = document.getElementById("intro");
    let imHot = document.getElementById("im-hot-tonight");
    let pushIt = document.getElementById("push-it-to-the-limit");
    let onFire = document.getElementById("shes-on-fire");
    let ginasTheme = document.getElementById("ginas-theme");
    let tonysTheme = document.getElementById("tonys-theme");

    function intro() {
        imHot.pause();
        pushIt.pause();
        onFire.pause();
        introTheme.play();
    } 

    function pauseIntro() {
        imHot.pause();
        pushIt.pause();
        onFire.pause();
        introTheme.pause();
    }

    function outroTheme() {
        introTheme.pause();
        imHot.pause();
        pushIt.pause();
        onFire.pause();
        if (wins >= 2) {
            tonysTheme.pause();
            ginasTheme.play();
        }
        else if (losses >= 2) {
            ginasTheme.pause();
            tonysTheme.play();
        }
    }

    function pauseOutro() {
        introTheme.pause();
        imHot.pause();
        pushIt.pause();
        onFire.pause();
        ginasTheme.pause();
        tonysTheme.pause();
    }

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.theme-button')) return;
        event.preventDefault();
        intro();
    }, false);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.pause-button')) return;
        event.preventDefault();
        pauseIntro();
    }, false);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.outro-button')) return;
        event.preventDefault();
        outroTheme();
    }, false);

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.outro-pause-button')) return;
        event.preventDefault();
        pauseOutro();
    }, false);

    function aud() {
        if (currentAnswer === answers[0]) {
            introTheme.pause();
            pushIt.pause();
            onFire.pause();
            imHot.play();
        }
        else if (currentAnswer === answers[1]) {
            introTheme.pause();
            imHot.pause();
            onFire.pause();
            pushIt.play();
        }
        else if (currentAnswer === answers[2]) {
            introTheme.pause();
            imHot.pause();
            pushIt.pause();
            onFire.play();
        }
    };

    function reset() {
        guessesRemaining = 12;
        wrongGuess = [];
        blanksAndCorrect = [];
        if (wins !== 2 || losses !== 2) {
            Game();
        }
    }

    function checkLetters(letter) {
        let letterInWord = false;
        for (let i = 0; i < blanks; i++) {
            if (currentAnswer[i] == letter) {
                letterInWord = true;
            }
        }
        if (letterInWord) {
            for (let i = 0; i < blanks; i++) {
                if (currentAnswer[i] == letter) {
                    blanksAndCorrect[i] = letter;
                }
            }
        }
        else {
            wrongGuess.push(letter);
            guessesRemaining--;
        }
    }

    function complete() {
        if (lettersOfAnswer.toString() == blanksAndCorrect.toString()) {
            wins++;
            reset()
            document.getElementById("winDiv").innerHTML = " " + wins;
        } 
        else if (guessesRemaining === 0) {
            losses++;
            reset()
            document.getElementById("lossDiv").innerHTML = " " + losses;
        }
        document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join(" ");
        document.getElementById("guessesDiv").innerHTML = " " + guessesRemaining;
    }

    Game();

    document.onkeyup = function (event) {
        let guesses = String.fromCharCode(event.keyCode).toLowerCase();
        aud();
        checkLetters(guesses);
        complete();
        document.getElementById("wrongLetters").innerHTML = "  " + wrongGuess.join(" ");
        victoryOrDefeat();
}
    function showHide() {
        document.getElementsByClassName("hide").style.display = 'block';
    }

    function victoryOrDefeat() {
        if (wins >= 2) {
            onFire.pause();
            outroTheme();
            showHide();
        }
        else if (losses >= 2) {
            onFire.pause();
            outroLoss();
            showHide();
        }
    }

});