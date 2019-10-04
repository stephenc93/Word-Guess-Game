// JavaScript function that wraps everything
$(document).ready(function () {

    // Gets Link for Intro Song
    const audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/intro.mp3");

    // Intro Buttons
    $(".theme-button").on("click", function() {
        audioElement.play();
      });
    $(".pause-button").on("click", function() {
        audioElement.pause();
      });

    // 
});
