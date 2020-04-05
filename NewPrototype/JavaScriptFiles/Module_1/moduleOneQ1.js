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

/* Allows stars to be visually shown but I could only get one to show everytime

var star = document.createElement( "IMG" );
star.height = 15;
star.width = 15;
star.marginLeft = 1060;
star.marginTop = 338;
star.src = "../../CSS/CSS_Pictures/Star.png";

// Shows stars
for ( var index = 0; index < 2; index++ )
{
    document.body.appendChild(star);
    star.style.marginLeft = star.marginLeft.toString() + "px";
    star.style.marginTop = star.marginTop.toString() + "px";
    
    // Move star
    star.marginLeft += 10;
}*/

// Attempts Left Message
document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + attemptsLeft.toString();

// Star score message
document.getElementById("scoreText").innerHTML =  " Star Score: " + totalUserStars + "/" + 60;