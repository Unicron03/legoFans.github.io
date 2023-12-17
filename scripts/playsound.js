var playButtonStarWars = document.getElementById("playButtonStarWars");
var audioPlayerStarWars = document.getElementById("audioPlayerStarWars");

var playButtonMarvel = document.getElementById("playButtonMarvel");
var audioPlayerMarvel = document.getElementById("audioPlayerMarvel");

var playButtonTechnic = document.getElementById("playButtonTechnic");
var audioPlayerTechnic = document.getElementById("audioPlayerTechnic");

function playRandomPosition(audioPlayer) {
    var duration = audioPlayer.duration;
    var randomPosition = Math.random() * duration;
  
    audioPlayer.currentTime = randomPosition;
    audioPlayer.play();
}

playButtonStarWars.addEventListener("click", function () {
    if (audioPlayerStarWars.paused) {
        playRandomPosition(audioPlayerStarWars);
        audioPlayerMarvel.pause();
        audioPlayerTechnic.pause();
    } else {
        audioPlayerStarWars.pause();
    }
});

playButtonMarvel.addEventListener("click", function () {
    if (audioPlayerMarvel.paused) {
        playRandomPosition(audioPlayerMarvel);
        audioPlayerStarWars.pause();
        audioPlayerTechnic.pause();
    } else {
        audioPlayerMarvel.pause();
    }
});

playButtonTechnic.addEventListener("click", function () {
    if (audioPlayerTechnic.paused) {
        playRandomPosition(audioPlayerTechnic);
        audioPlayerStarWars.pause();
        audioPlayerMarvel.pause();
    } else {
        audioPlayerTechnic.pause();
    }
});