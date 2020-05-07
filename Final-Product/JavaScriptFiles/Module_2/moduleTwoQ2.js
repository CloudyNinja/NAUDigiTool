// Attempts Left Message
var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = parseInt(localStorage.getItem("updatedUserStars"));

// Timer
timer = setInterval( "countDown()", 1000 );

// Attempts left message
document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 20;