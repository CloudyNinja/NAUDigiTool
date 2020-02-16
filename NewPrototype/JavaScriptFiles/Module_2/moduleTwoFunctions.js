
// Global variables
var randomNum = Math.floor( ( Math.random() * 1000 ) + 1 ) 
var randomNum2 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum3 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum4 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum5 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum6 = Math.floor( ( Math.random() * 1000 ) + 1 )

// Generates random decimal number
function random()
{
    document.getElementById("randomNumber1").innerHTML = randomNum
    document.getElementById("randomNumber1").value = randomNum

    document.getElementById("randomNumber2").innerHTML = randomNum2
    document.getElementById("randomNumber2").value = randomNum2

    document.getElementById("randomNumber3").innerHTML = randomNum3
    document.getElementById("randomNumber3").value = randomNum3

    document.getElementById("randomNumber4").innerHTML = randomNum4
    document.getElementById("randomNumber4").value = randomNum4

    document.getElementById("randomNumber5").innerHTML = randomNum5
    document.getElementById("randomNumber5").value = randomNum5

    document.getElementById("randomNumber6").innerHTML = randomNum6
    document.getElementById("randomNumber6").value = randomNum6
}

// Checks if hex value is correct
function submitHex()
{
    var counter = 0;

    for( var index = 1; index <= 6; index++ )
    {
        var userInput = document.getElementById( "hex" + index ).value;
        var answer = document.getElementById( "randomNumber" + index).value;
        if( userInput.toUpperCase() == answer.toString(16).toUpperCase() )
        {
            counter += 1;
        }
    }
    if( counter >= 5 )
    {
        alert( "Congrats, you passed this page!" );
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 questions right to move on";
    }
    
}

/* Checks if octal value is correct -- TO DO --
function submitOctal()
{
    var answer = randomNum2.toString(8);
    var userInput = document.getElementById("oct").value
    if( userInput == answer )
    {
        alert("Congratulations, correct answer!")
    }
    else
    {
    alert("Incorrect, try again.")
    }
}
*/

// Gives hint to user
function receiveHint()
{
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "Keep in mind that hexadecimal uses a base-16 system...";
    }
}

// Resets input boxes and reloads page for new numbers
function resetEquation()
{
    for( var index = 1; index <= 6; index++ )
    {
        document.getElementById( "hex" + index ).value = "";
    }
    location.reload() 
}

// Shows numder of attempts left
function decreaseAttempts( number )
{
    if ( number > 1 )
    {
        number -= 1;
        document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + number.toString();
        
        starsGiven -= 1;
        
        document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
    }
    
    else
    {
        userStars += starsGiven;
        passUserStars( userStars );
        
        /*
        if ( Boolean( window.location.href.indexOf("moduleOneQuestionOne") > -1 ) )
        {
            window.location.href = "moduleOneQuestionTwo.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionTwo") > -1 ) )
        {
            window.location.href = "moduleOneQuestionThree.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionThree") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFour.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionFour") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFive.html";
        }
        */
        
        /*alert( " Star Score: " + userStars.toString() + "/" + moduleOneMaxStars.toString() );*/
    }
    
    return number;
}