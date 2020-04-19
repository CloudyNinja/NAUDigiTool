
/* This file contains all the functions for Module Two, including functions to generate random numbers, functions to check if answers are correct,
   and functions that allow users to get a hint on their current problem and reset the boxes on a page
*/

var student_id = sessionStorage.getItem("student_id");
var mistakesMade = 0;

// Generates random decimal number
function randomDecimal()
{
    for( var index = 1; index <= 3; index++ )
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

// Generates random decimal fraction
function randomDecimalFraction()
{
    for( var index = 1; index <= 3; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            randomNumberSuffix = Math.floor( ( Math.random() * 128 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumberPrefix + "." + randomNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = randomNumberPrefix + "." + randomNumberSuffix;
        }
        else if( index == 2 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 257 ) + 256 ); // Generates random number between 256 and 512
            randomNumberSuffix = Math.floor( ( Math.random() * 128 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumberPrefix + "." + randomNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = randomNumberPrefix + "." + randomNumberSuffix;
        }
        else
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 489 ) + 512 ); // Generates random number between 512 and 1,000
            randomNumberSuffix = Math.floor( ( Math.random() * 128 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            document.getElementById( "randomNumber" + index ).innerHTML = randomNumberPrefix + "." + randomNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = randomNumberPrefix + "." + randomNumberSuffix;
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

// Helper function for converting fractions
function convert(value, base = 2) 
{
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
        .split('')
        .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}

// Generates random binary fraction
function randomBinaryFraction()
{
    for( var index = 1; index <= 3; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 64 ) + 1 ); // Generates random number between 1 and 64
            randomNumberSuffix = Math.floor( ( Math.random() * 15 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            binaryNumberPrefix = randomNumberPrefix.toString(2); // Converts random number to binary
            binaryNumberSuffix = randomNumberSuffix.toString(2);
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumberPrefix + "." + binaryNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = binaryNumberPrefix + "." + binaryNumberSuffix;
        }
        else if( index == 2 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 65 ) + 64 ); // Generates random number between 64 and 128
            randomNumberSuffix = Math.floor( ( Math.random() * 15 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            binaryNumberPrefix = randomNumberPrefix.toString(2); // Converts random number to binary
            binaryNumberSuffix = randomNumberSuffix.toString(2);
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumberPrefix + "." + binaryNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = binaryNumberPrefix + "." + binaryNumberSuffix;
        }
        else
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 129 ) + 128 ); // Generates random number between 128 and 256
            randomNumberSuffix = Math.floor( ( Math.random() * 15 ) + 1 ); // Generates random suffix between 1 and 15 ( 1/2 to 1/16 )
            binaryNumberPrefix = randomNumberPrefix.toString(2); // Converts random number to binary
            binaryNumberSuffix = randomNumberSuffix.toString(2);
            document.getElementById( "randomNumber" + index ).innerHTML = binaryNumberPrefix + "." + binaryNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = binaryNumberPrefix + "." + binaryNumberSuffix;
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

// Generates random octal fraction
function randomOctalFraction()
{
    for( var index = 1; index <= 3; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 88 ) + 1 ); // Generates random number between 1 and 88
            randomNumberSuffix = Math.floor( ( Math.random() * 7 ) + 1 ); // Generates random suffix between 1 and 7
            octalNumberPrefix = randomNumberPrefix.toString(8); // Converts random number to octal
            octalNumberSuffix = randomNumberSuffix.toString(8);
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumberPrefix + "." + octalNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = octalNumberPrefix + "." + octalNumberSuffix;
        }
        else if( index == 2 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 87 ) + 88 ); // Generates random number between 88 and 174
            randomNumberSuffix = Math.floor( ( Math.random() * 7 ) + 7 ); // Generates random suffix between 7 and 13
            octalNumberPrefix = randomNumberPrefix.toString(8); // Converts random number to octal
            octalNumberSuffix = randomNumberSuffix.toString(8);
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumberPrefix + "." + octalNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = octalNumberPrefix + "." + octalNumberSuffix;
        }
        else 
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 157 ) + 174 ); // Generates random number between 174 and 330
            randomNumberSuffix = Math.floor( ( Math.random() * 7 ) + 13 ); // Generates random suffix between 13 and 19 
            octalNumberPrefix = randomNumberPrefix.toString(8); // Converts random number to octal
            octalNumberSuffix = randomNumberSuffix.toString(8);
            document.getElementById( "randomNumber" + index ).innerHTML = octalNumberPrefix + "." + octalNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = octalNumberPrefix + "." + octalNumberSuffix;
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

function randomHexFraction()
{
    for( var index = 1; index <= 6; index++ )
    {
        var randomNumber = document.getElementById( "randomNumber" + index );
        if( index == 1 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 256 ) + 1 ); // Generates random number between 1 and 256
            randomNumberSuffix = Math.floor( ( Math.random() * 15 ) + 1 ); // Generates random suffix between 1 and 15
            hexNumberPrefix = randomNumberPrefix.toString(16).toUpperCase(); // Converts random number to hex
            hexNumberSuffix = randomNumberSuffix.toString(16).toUpperCase();
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumberPrefix + "." + hexNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = hexNumberPrefix + "." + hexNumberSuffix;
        }
        else if( index == 2 )
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 257 ) + 256 ); // Generates random number between 256 and 512
            randomNumberSuffix = Math.floor( ( Math.random() * 14 ) + 15 ); // Generates random suffix between 14 and 30
            hexNumberPrefix = randomNumberPrefix.toString(16).toUpperCase(); // Converts random number to hex
            hexNumberSuffix = randomNumberSuffix.toString(16).toUpperCase();
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumberPrefix + "." + hexNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = hexNumberPrefix + "." + hexNumberSuffix;
        }
        else
        {
            randomNumberPrefix = Math.floor( ( Math.random() * 489 ) + 512 ); // Generates random number between 512 and 1,000
            randomNumberSuffix = Math.floor( ( Math.random() * 29 ) + 30 ); // Generates random suffix between 30 and 60
            hexNumberPrefix = randomNumberPrefix.toString(16).toUpperCase(); // Converts random number to hex
            hexNumberSuffix = randomNumberSuffix.toString(16).toUpperCase();
            document.getElementById( "randomNumber" + index ).innerHTML = hexNumberPrefix + "." + hexNumberSuffix;
            document.getElementById( "randomNumber" + index ).value = hexNumberPrefix + "." + hexNumberSuffix;
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // Decimal fraction to binary fraction
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion14") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index ).value;
            var answer = convert( numberToCheck, 10 ).toString( 2 );
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
        if( counter == 3 )
        {
            showIt();
            console.log( totalUserStars );
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for decimal fraction to octal
function submitDecimalFractionToOctal()
{
    var counter = 0;
    for( var index = 1; index <= 3; index++ )
    {
        var userInput = document.getElementById( "input" + index ).value;
        var numberToCheck = document.getElementById( "randomNumber" + index ).value;
        var answer = convert( numberToCheck, 10 ).toString( 8 );
        if( userInput == answer )
        {
            counter += 1;
        }
    }
    if( counter == 3 )
    {
        showIt();
    }
    else
    {
         document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
    }
}

// Submit function for decimal fraction to hex
function submitDecimalFractionToHex()
{
    var counter = 0;
    for( var index = 1; index <= 3; index++ )
    {
        var userInput = document.getElementById( "input" + index ).value;
        var numberToCheck = document.getElementById( "randomNumber" + index ).value;
        var answer = convert( numberToCheck, 10 ).toString( 16 );
        if( userInput.toUpperCase() == answer.toUpperCase() )
        {
            counter += 1;
        }
    }
    if( counter == 3 )
    {
        showIt();
    }
    else
    {
         document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }

    // Octal fraction to decimal fraction
    else if ( Boolean( window.location.href.indexOf("moduleTwoQuestion12") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = convert( numberToCheck, 8 ); // Converts numberToCheck from octal to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for octal fractions to binary
function submitOctalFraction()
{
    var counter = 0;
    for( var index = 1; index <= 3; index++ )
    {
        var userInput = document.getElementById( "input" + index ).value;
        var numberToCheck = document.getElementById( "randomNumber" + index).value;
        var answer = convert( numberToCheck, 8 ).toString( 2 ); // Converts numberToCheck from octal to decimal and then to binary
        if( userInput == answer )
        {
            counter += 1;
        }
    }
    if( counter == 3 )
    {
        showIt();
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
            if( userInput == answer.toString( 8 ) )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
            if( userInput == answer.toString( 16 ) )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for binary fraction conversions
function submitBinaryFraction()
{
    var counter = 0;

    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion11") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = convert( numberToCheck, 2 ); // Converts numberToCheck from binary to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
}

// Submit function for binary fraction to octal
function submitBinaryFractionToOctal()
{
    var counter = 0;
    for( var index = 1; index <= 3; index++ )
    {
        var userInput = document.getElementById( "input" + index ).value;
        var numberToCheck = document.getElementById( "randomNumber" + index).value;
        var answer = convert( numberToCheck, 2 ).toString( 8 ); // Converts numberToCheck from binary to decimal and then to octal
        if( userInput == answer )
        {
            counter += 1;
        }
    }
    if( counter == 3 )
    {
        showIt();
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
    }
}

// Submit function for binary fraction to hex
function submitBinaryFractionToHex()
{
    var counter = 0;
    for( var index = 1; index <= 3; index++ )
    {
        var userInput = document.getElementById( "input" + index ).value;
        var numberToCheck = document.getElementById( "randomNumber" + index).value;
        var answer = convert( numberToCheck, 2 ).toString( 16 ); // Converts numberToCheck from binary to decimal and then to hex
        if( userInput.toUpperCase() == answer.toUpperCase() )
        {
            counter += 1;
        }
    }
    if( counter == 3 )
    {
        showIt();
    }
    else
    {
        document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
        // Decrease attempts and star score by 1
        attemptsLeft = decreaseAttempts( attemptsLeft );
        
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        }
    }
}

function submitHexFraction()
{
    var counter = 0;

    // Hex fraction to decimal fraction
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestion13") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = convert( numberToCheck, 16 ); // Converts numberToCheck from hex to decimal
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
            // Decrease attempts and star score by 1
            attemptsLeft = decreaseAttempts( attemptsLeft );
        
        }
    }
    // Hex fracion to binary fraction
    else
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = convert( numberToCheck, 16 ).toString( 2 ); // Converts numberToCheck from hex to decimal and then to binary
            if( userInput == answer )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            showIt();
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Must get all questions correct to move on.";
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
    mistakesMade++;

    if ( number > 1 )
    {
        number -= 1;
        document.getElementById("attemptsLeft").innerHTML = "Attempts left: " + number.toString();
        document.getElementById("scoreText").innerHTML =  " Star Score: " + starsGiven.toString() + "/" + levelMaxStars.toString();
    }
    else
    {
        starsGiven = 0;
        totalUserStars += starsGiven;
        passUserStars( totalUserStars );
        timeTaken = getTimeTaken( minutes, seconds );
        console.log( "TIME TAKEN: " + timeTaken );
        // You can store the timeTaken variable in the db_log statement
        // As of right now it's only registers per question
        db_log(student_id, 2, 0, false, starsGiven, mistakesMade, timeTaken); 
        alert( "Answer missed. No star given." );
        clearInterval( timer );
        goToNextPage();
    }
    return number;
}

// Navigates to next page 
function goToNextPage()
{    
    for ( var index = 1; index <= 20; index++ )
    {
        if ( Boolean( window.location.href.indexOf("moduleTwoQuestion" + index ) > -1 ) )
        {
            if ( index < 20 )
            {
                var nextPage = index + 1;
                window.location.href = "moduleTwoQuestion" + nextPage + ".html";
            }

            else
            {
                window.location.href = "moduleTwoQuestionsComplete.html";
                showScore();
            }
        }
    }
}

///// Timer stuff /////////
var maxTime = 60 * 10;
var minutes;
var seconds;

// Creates and sets a timer for each page
function countDown()
{
    if ( maxTime >= 0 )
    {
        hours = Math.floor( maxTime / 3600 );
        minutes = Math.floor( ( maxTime - hours * 3600 ) / 60 );
        seconds = Math.floor( maxTime % 60 );
        var msg = "Time left: " + minutes + " minutes, " + seconds + " seconds.";
        document.getElementById( "timer" ).innerHTML = msg;
        
        // Decrements time
        --maxTime;
        window.name = maxTime;
    }
    else
    {
        clearInterval( timer );
        timeTaken = getTimeTaken( minutes, seconds );
        console.log( "TIME TAKEN: " + timeTaken );
        // You can put a db log statement here as well
        alert( "Time has expired. Moving to next page.");
        goToNextPage();
    }
}

function getTimeTaken( minutesPassed, secondsPassed )
{
    var minuteCounter = 0;
    var secondCounter = 0;
    var total = 0;
    
    while ( minutesPassed != 10 )
    {
        while ( secondsPassed != 60 )
        {
            secondCounter += 1;
            secondsPassed++;
        }
        
        minutesPassed += 1;
        
        if ( minutesPassed != 10 )
        {
            minuteCounter += 1;
        }
    }
    
    total = minuteCounter + " minutes " + secondCounter + " seconds ";
    return total;
}

/////////////////////////////// For alerts /////////////////////////////////////////
function showIt()
{			
    starsGiven = 1;
    totalUserStars += starsGiven;
    passUserStars( totalUserStars );
    timeTaken = getTimeTaken( minutes, seconds );
    //alert( "TIME TAKEN: " + timeTaken );
    console.log( "TIME TAKEN: " + timeTaken );
    // You can store the timeTaken variable in the db_log statement
    // As of right now it's only registers per question
    db_log(student_id, 2, 0, true, starsGiven, mistakesMade, timeTaken);
    document.getElementById('myalert').style.display = "block";	 
    setTimeout( hideIt, 2000 );
}
                    
function hideIt()
{  
    clearInterval( timer );
    document.getElementById('myalert').style.display = "none";
    goToNextPage();
} 

/////////////////////////////// Only one function needed for score /////////////////////////////////////////
function showScore()
{    
    if ( totalUserStars >= 18 )
    {
        // You can add that database flag that allows then access to Module 2 or not.
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleTwoMaxStars.toString() + "\n\n\nYou passed Numeric Conversions!");
        window.location.href = "../../modules.html";
    }
    
    else
    {
        // You can add that database flag that allows then access to Module 2 or not.
        alert( "MODULE STAR SCORE: " + totalUserStars + "/" + moduleTwoMaxStars.toString() + "\n\n\nModule failed. Try again.");
        window.location.href = "../../modules.html";
    }
}

///// Progress Bar /////////
var progress = 0;

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
