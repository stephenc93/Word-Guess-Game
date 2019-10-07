// JavaScript function that wraps everything
$(document).ready(function () {
    
    let maxGuess = 15;
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let songNames = ["pushit to the limit", "im hot tonight", "shes on fire"]

    let songNames = songNames[Math.floor(Math.random() * songNames.length)];

    let answerArray = [];
    u for (let i = 0; i < songNames.length; i++) {
        answerArray[i] = "_";
    }
    let remainingLetters = songNames.length;

    // Gets Link for Intro Song
    const audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/intro.mp3");

    // Intro Buttons
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    v if (guess === null) {
    break;
    w } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
        } else {
x // Update the game state with the guess
}


    // pick a song from array in order 

    // While the word has not been guessed {
    //     Show the player their current progress
    //     Get a guess from the player
    //     If the player wants to quit the game {
    //     Quit the game
    //     }
    //     Else If the guess is not a single letter {
    //     Tell the player to pick a single letter
    //     }
    //     Else {
    //     If the guess is in the word {
    //     Update the player's progress with the guess
    //     }
    //     }
    //    }
    // Congratulate the player on guessing the word




    // Gets Link for Outro Song

    // if player wins > 1 game, play ginastheme
    // else play tonystheme
    // audioElement = document.createElement("audio");
    // audioElement.setAttribute("src", "placeholder");

    // Outro Buttons
    $(".outro-button").on("click", function () {
        audioElement.play();
    });
    $(".outro-pause-button").on("click", function () {
        audioElement.pause();
    });
});
