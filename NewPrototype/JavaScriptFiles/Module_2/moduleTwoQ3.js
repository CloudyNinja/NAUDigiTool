// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 3;
var levelMaxStars = 3;

document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();