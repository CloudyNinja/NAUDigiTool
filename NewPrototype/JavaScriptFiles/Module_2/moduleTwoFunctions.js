
// Global variables
var randomNum = Math.floor( ( Math.random() * 1000 ) + 1 ) 
var randomNum2 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum3 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum4 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum5 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum6 = Math.floor( ( Math.random() * 1000 ) + 1 )

// Generates random decimal number
function randomDecimal()
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
        // Move onto next page
        window.location.href = "moduleTwoQuestionTwo.html";
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
    }
    
}

// Checks if octal value is correct 
function submitOctal()
{
    var counter = 0;

    for( var index = 1; index <= 6; index++ )
    {
        var userInput = document.getElementById( "hex" + index ).value;
        var answer = document.getElementById( "randomNumber" + index).value;
        if( userInput.toUpperCase() == answer.toString(8).toUpperCase() )
        {
            counter += 1;
        }
    }
    if( counter >= 5 )
    {
        alert( "Congrats, you passed this page!" );
        // Move onto next page
         window.location.href = "moduleTwoQuestionThree.html";
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
    }
}

// Checks if binary value is correct 
function submitBinary()
{
    var counter = 0;

    for( var index = 1; index <= 6; index++ )
    {
        var userInput = document.getElementById( "hex" + index ).value;
        var answer = document.getElementById( "randomNumber" + index).value;
        if( userInput.toUpperCase() == answer.toString(2).toUpperCase() )
        {
            counter += 1;
        }
    }
    if( counter >= 5 )
    {
        alert( "Congrats, you passed this page!" );
        // Move onto next page
        // window.location.href = "moduleTwoQuestionFour.html";
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
    }
}

// Gives hint to user
function receiveHint()
{
    // If current window is decimal to hexadecimal problems
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "Keep in mind that the hexadecimal system uses a base-16 system...";
    }

    // If current window is decimal to octal problems
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionTwo") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "Keep in mind that the octal system uses a base-8 system...";
    }

    // If current window is decimal to binary problems
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionThree") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "Keep in mind that the binary system uses a base-2 system...";
    }
}

// Resets input boxes and reloads page for new numbers
function resetEquation()
{
    // If current window is decimal to hexadecimal conversions
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            document.getElementById( "hex" + index ).value = "";
        }
    }

    // If current window is decimal to octal conversions
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionTwo") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            document.getElementById( "hex" + index ).value = "";
        }
    }

    // If current window is decimal to binary conversions
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionThree") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            document.getElementById( "hex" + index ).value = "";
        }
    }

    // Refreshes the page
    location.reload() 
}

// Decreases number of attempts left and number of stars given
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
        
        
        if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
        {
            window.location.href = "moduleTwoQuestionTwo.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleTwoQuestionTwo") > -1 ) )
        {
            window.location.href = "moduleTwoQuestionThree.html";
        }
        /*
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionThree") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFour.html";
        }
        
        else if ( Boolean( window.location.href.indexOf("moduleOneQuestionFour") > -1 ) )
        {
            window.location.href = "moduleOneQuestionFive.html";
        }
        */
        
    }
    
    return number;
}