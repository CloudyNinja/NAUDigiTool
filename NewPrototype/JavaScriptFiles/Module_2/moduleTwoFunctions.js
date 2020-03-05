
// Generates random decimal number
function randomDecimal()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumber = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber
        }
        else if( index == 2 )
        {
            randomNumber = Math.floor( ( Math.random() * 257 ) + 256 ); // Generates random number between 256 and 512
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber
        }
        else
        {
            randomNumber = Math.floor( ( Math.random() * 489 ) + 512 ); // Generates random number between 512 and 1,000
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumber;
            document.getElementById( "randomNumber" + index ).value = randomNumber
        }
    }
}

// Generates random binary number
function randomBinary()
{
    for( var index = 1; index <= 3; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumber = Math.floor( ( Math.random() * 64 ) + 1 ); // Generates random number between 1 and 64
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }
        else if( index == 2 )
        {
            randomNumber = Math.floor( ( Math.random() * 65 ) + 64 ); // Generates random number between 64 and 128
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }
        else
        {
            randomNumber = Math.floor( ( Math.random() * 129 ) + 128 ); // Generates random number between 128 and 256
            binaryNumber = randomNumber.toString(2); // Converts random number to binary
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumber;
            document.getElementById( "randomNumber" + index ).value = binaryNumber;
        }
    }  
}

// Generates random octal number
function randomOctal()
{
    for( var index = 1; index <= 3; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumber = Math.floor( ( Math.random() * 88 ) + 1 ); // Generates random number between 1 and 88
            octalNumber = randomNumber.toString( 8 ); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }
        else if( index == 2 )
        {
            randomNumber = Math.floor( ( Math.random() * 87 ) + 88 ); // Generates random number between 88 and 174
            octalNumber = randomNumber.toString( 8 ); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }
        else 
        {
            randomNumber = Math.floor( ( Math.random() * 157 ) + 174 ); // Generates random number between 174 and 330
            octalNumber = randomNumber.toString( 8 ); // Converts random number to octal
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumber;
            document.getElementById( "randomNumber" + index ).value = octalNumber;
        }
    }
}

// Generates random hexadecimal number
function randomHex()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumber = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            hexNumber = randomNumber.toString(16).toUpperCase(); // Converts random number to hex
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumber;
            document.getElementById( "randomNumber" + index ).value = hexNumber;
        }
        else if( index == 2 )
        {
            randomNumber = Math.floor( ( Math.random() * 257 ) + 256 ); // Generates random number between 256 and 512
            hexNumber = randomNumber.toString(16).toUpperCase(); // Converts random number to hex
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumber;
            document.getElementById( "randomNumber" + index ).value = hexNumber;
        }
        else
        {
            randomNumber = Math.floor( ( Math.random() * 489 ) + 512 ); // Generates random number between 512 and 1,000
            hexNumber = randomNumber.toString(16).toUpperCase(); // Converts random number to hex
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumber;
            document.getElementById( "randomNumber" + index ).value = hexNumber;
        }
    }
}

// Submit function for decimal conversions
function submitDecimal()
{
    var counter = 0;

    // ================================ DECIMAL TO BINARY ================================
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion4") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var answer = document.getElementById( "randomNumber" + index).value;
            if( userInput == answer.toString(2) )
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

    // ================================ DECIMAL TO OCTAL ================================
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion5") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var answer = document.getElementById( "randomNumber" + index).value;
            if( userInput == answer.toString(8) )
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

    // ================================ DECIMAL TO HEX ================================
    else
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var answer = document.getElementById( "randomNumber" + index).value;
            if( userInput.toUpperCase() == answer.toString( 16 ).toUpperCase() )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
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

// Submit functions for octal conversions
function submitOctal()
{
    var counter = 0;

    // ================================ OCTAL TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion2") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
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
            window.location.href = "moduleTwoQuestion3.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // ================================ OCTAL TO BINARY ================================
    else 
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 8 ); // Converts numberToCheck from octal to decimal
            if( userInput == answer.toString( 2 ) )
            {
                counter += 1;
            }
        }
        if( counter >= 1 )
        {
            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "moduleTwoQuestion10.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for binary conversions
function submitBinary()
{
    var counter = 0;

    // ================================ BINARY TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion1") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
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

    // ================================ BINARY TO OCTAL ================================
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion7") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
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
            window.location.href = "moduleTwoQuestion8.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    
    // ================================ BINARY TO HEX ================================
    else
    {
        for( var index = 1; index <= 3; index++ )
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
            window.location.href = "moduleTwoQuestion9.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for hex conversions
function submitHex()
{
    var counter = 0;

    // ================================ HEX TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion3") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 16 ); // Converts numberToCheck from hex to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter >= 5 )
        {
            alert( "Congrats, you passed this page!" );
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

    // ================================ HEX TO BINARY ================================
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion10") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 16 ); // Converts numberToCheck from hex to decimal
            if( userInput == answer.toString( 2 ) )
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
            window.location.href = "moduleTwoQuestionComplete.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get at least 5 correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        }
    }
}

// Gives hint to user
function receiveHint()
{
    // If current window is binary to decimal problems
    for( var index = 1; index <= 1; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the binary system is base-2..."
        }   
    }

    // If current window is octal to decimal problems
    for( var index = 2; index <= 2; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the octal system is base-8..."
        }   
    }

    // If current window is hex to decimal problems
    for( var index = 3; index <= 3; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the hexadecimal system is base-16..."
        }   
    }

    // If current window is decimal to binary, octal, or hex problems
    for( var index = 4; index <= 6; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Keep in mind that the decimal system is base-10..."
        }   
    }

    // If current window is binary to octal or hex problems
    for( var index = 7; index <= 8; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Convert from binary to decimal first..."
        }   
    }

    // If current window is octal to binary problems
    for( var index = 9; index <= 9; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Convert from octal to decimal first..."
        }   
    }

    // If current window is hex to binary problems
    for( var index = 10; index <= 10; index++ )
    {
        if( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
        {
            document.getElementById( "hint" ).innerHTML = "Convert from hex to decimal first..."
        }   
    }
}

// Resets input boxes and reloads page for new numbers
function resetEquation()
{
    for( var index = 1; index <= 3; index++ )
    {
        document.getElementById( "input" + index ).value = "";
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
        
        for( var index = 1; index <= 10; index++ )
        {
            if ( Boolean( window.location.href.indexOf( "moduleTwoQuestion" + index ) > -1 ) )
            {
                if( index < 10)
                {
                    var nextPage = index + 1;
                    window.location.href = "moduleTwoQuestion" + nextPage + ".html";
                }
                else
                {
                    window.location.href = "moduleTwoQuestionComplete.html";
                }
            }
        }
        
    }
    
    return number;
}

// Creates and sets a timer for each page
// var maxtime;
// if(window.name=='' || window.name == '-1' || isNaN(window.name))
// {
//     maxtime = 10*60;
// }else
// {
//     maxtime = window.name;
// }
// function CountDown()
// {
//     if(maxtime>=0)
//     {
//         hours = Math.floor(maxtime/3600);
//         minutes = Math.floor((maxtime-hours*3600)/60);
//         seconds = Math.floor(maxtime%60);
//         msg = "Time left: " + minutes + " minutes, " + seconds + " seconds.";
//         document.getElementById( "timer" ).innerHTML = msg;
//         if(maxtime == 5*60) alert('only 5mins!');
//         --maxtime;
//         window.name = maxtime;
//     }
//     else
//     {
//         clearInterval(timer);
//         document.getElementById( "timer" ).innerHTML = "Time has expired.";
//     }
// }
// timer = setInterval("CountDown()",1000);

// For practice mode selection page
function submitDropdown( dropdown )
{
    // Get user inputs from first page
    if( Boolean( window.location.href.indexOf( "practiceModuleTwoQuestion" ) > -1 ))
    {
        var choice1 = document.getElementById( "conversionSelection1" );
        var choice2 = document.getElementById( "conversionSelection2" );
    }
    // Pass user inputs to second page
    else
    {

    }
    

}