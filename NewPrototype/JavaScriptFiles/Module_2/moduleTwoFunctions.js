
/* Generates random decimal number
function randomDecimal()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        // Generates random decimal numbers for level 1 
        if( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber;
        }

        // Generates random decimal numbers for level 2
        else if( Boolean( window.location.href.indexOf("moduleTwoQuestionTwo") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 512 ) + 1 ); // Generates random number between 1 and 512
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber;
        }

        // Generates random decimal numbers for level 3
        else
        {
            randomNumber = Math.floor( ( Math.random() * 1000 ) + 1 ); // Generates random number between 1 and 1,000
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber;
        }
        
    }
}
*/

// Generates random binary number
function randomBinary()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );

        // Generates random binary number for level 1
        if( Boolean( window.location.href.indexOf("moduleTwoQuestion1") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 64 ) + 1 ); // Generates random number between 1 and 64
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }

        // Generates random binary number for level 2
        else if( Boolean( window.location.href.indexOf("moduleTwoQuestion2") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 128 ) + 1 ); // Generates random number between 1 and 128
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }

        // Generates random binary number for level 3
        if( Boolean( window.location.href.indexOf("moduleTwoQuestion3") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }
    }  
}

// Generates random octal number
function randomOctal()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );

        // Generates random octal number for level 1
        if( Boolean( window.location.href.indexOf("moduleTwoQuestion4") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 88 ) + 1 ); // Generates random number between 1 and 130
            octalNumber = randomNumber.toString(8); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }

        // Generates random binary number for level 2
        else if( Boolean( window.location.href.indexOf("moduleTwoQuestion5") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 174 ) + 1 ); // Generates random number between 1 and 256
            octalNumber = randomNumber.toString(8); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }

        // Generates random binary number for level 3
        if( Boolean( window.location.href.indexOf("moduleTwoQuestion6") > -1 ) )
        {
            randomNumber = Math.floor( ( Math.random() * 330 ) + 1 ); // Generates random number between 1 and 512
            octalNumber = randomNumber.toString(8); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }
    }
}
/* Checks if hex value is correct
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
            window.location.href = "moduleTwoQuestionThree.html";
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
            window.location.href = "moduleTwoQuestionFour.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
    
}
*/

// Checks if octal conversion is correct 
function submitOctal()
{
    var counter = 0;

    // Octal to decimal level 1
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion4") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 8 ); // Converts numberToCheck from octal to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion5.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // Octal to decimal level 2
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion5") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 8 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion6.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    
    // Octal to decimal to level 3
    else
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 8 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 1 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion7.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Checks if binary conversion is correct
function submitBinary()
{
    var counter = 0;

    // Binary to decimal level 1
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion1") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 2 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion2.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // Binary to decimal level 2
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion2") > -1 ) )
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 2 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion3.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    
    // Binary to decimal to level 3
    else
    {
        for( var index = 1; index <= 6; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 2 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
            // Award star to user
                // Function awardStar()
            // Move onto next page
            window.location.href = "moduleTwoQuestion4.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Checks if hex conversion is correct
function submitHex()
{
    // TO DO
}

// Gives hint to user
function receiveHint()
{
    // If current window is binary to decimal problems
    for( var index = 1; index <= 3; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the decimal system is base-2..."
        }   
    }

    // If current window is octal to decimal problems
    for( var index = 4; index <= 6; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the octal system is base-8..."
        }   
    }

    // If current window is hex to decimal problems
}

// Resets input boxes and reloads page for new numbers
function resetEquation()
{
    for( var index = 1; index <= 30; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            for( var index2 = 1; index2 <= 6; index++ )
            {
                document.getElementById( "input" + index ).value = "";
            }
        }
    } 
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
        
        for( var index = 1; index <= 30; index++ )
        {
            if ( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
            {
                var nextPage = index + 1;
                window.location.href = "moduleTwoQuestion" + nextPage + ".html";
            }
        }
        
    }
    
    return number;
}