
// Generates random decimal number
function randomDecimal()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        randomNumber = Math.floor( ( Math.random() * 1024 ) + 1 ); // Generates random number between 1 and 1024
        document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
        document.getElementById( "randomNumber" + index ).value = randomNumber;
    }
}

// Checks if hex value is correct
function submitDecimal()
{
    var counter = 0;

    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
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

    // For decimal to octal
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestionTwo") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
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
            window.location.href = "moduleTwoQuestionTwo.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // For decimal to binary
    else
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
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
            window.location.href = "moduleTwoQuestionTwo.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
    
}

// Checks if octal conversion is correct 
function submitOctal()
{
    // TO DO
}

// Checks if binary conversion is correct
function submitBinary()
{
    // TO DO
}

// Checks if hex conversion is correct
function submitHex()
{
    // TO DO
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
    // location.reload() 
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