// 3 var truth table translation
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 0;
var hint = 1;
var practiceMode = 0;

array = createArray(3);
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);
timer = setInterval( "countDown()", 1000 );

var attemptsLeft = 3;
var starsGiven = 1;
var levelMaxStars = 1;
var totalUserStars = 0;

var c = document.createDocumentFragment();
var star = document.createElement("IMG");
star.height = 15;
star.width = 15;
star.src = "../../CSS/CSS_Pictures/Star.png";

// Shows stars
var starMarginLeft = 1060;
var starMarginTop = 338;
for ( var index = 0; index < 1; index++ )
{
    document.body.appendChild(star);
    star.style.marginLeft = starMarginLeft.toString() + "px";
    star.style.marginTop = starMarginTop.toString() + "px";
    
    // Move star
    starMarginLeft += 10;
}

// Attempts Left Message
document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;

// Show the stars earned
document.getElementById("starsEarned").innerHTML =  " Stars earned: ";