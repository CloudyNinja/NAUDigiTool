
/* This page includes all of the functions for the Module Two Practice Mode */

var student_id = sessionStorage.getItem("student_id");
var mistakes = 0;
// For practice mode selection page
function generateQuestion()
{
    // ======================================= DECIMAL TO OTHER CONVERSIONS ==================================================================
                if ( document.getElementById("optionOne").checked && document.getElementById("questionOne").checked  )
                {
                    alert( "Cannot perform decimal to decimal conversion. Pick two different conversions." );
                }
                
                else if ( document.getElementById("optionOne").checked && document.getElementById("questionTwo").checked  )
                {
                    window.location.href = "decimalToBinary.html";
                }
                
                else if ( document.getElementById("optionOne").checked && document.getElementById("questionThree").checked  )
                {
                    window.location.href = "decimalToOctal.html";
                }

                else if ( document.getElementById("optionOne").checked && document.getElementById("questionFour").checked  )
                {
                    window.location.href = "decimalToHex.html";
                }
                
    // ======================================= BINARY TO OTHER CONVERSIONS ==================================================================
                else if ( document.getElementById("optionTwo").checked && document.getElementById("questionOne").checked  )
                {
                    window.location.href = "binaryToDecimal.html";
                }
                
                else if ( document.getElementById("optionTwo").checked && document.getElementById("questionTwo").checked  )
                {
                    alert( "Cannot perform binary to binary conversion. Pick two different conversions." );
                }
                
                else if ( document.getElementById("optionTwo").checked && document.getElementById("questionThree").checked  )
                {
                    window.location.href = "binaryToOctal.html";
                }

                else if ( document.getElementById("optionTwo").checked && document.getElementById("questionFour").checked  )
                {
                    window.location.href = "binaryToHex.html";
                }
                
    // ======================================= OCTAL TO OTHER CONVERSIONS ==================================================================
                else if ( document.getElementById("optionThree").checked && document.getElementById("questionOne").checked  )
                {
                    window.location.href = "octalToDecimal.html";
                }
                
                else if ( document.getElementById("optionThree").checked && document.getElementById("questionTwo").checked  )
                {
                    window.location.href = "octalToBinary.html";
                }

                else if ( document.getElementById("optionThree").checked && document.getElementById("questionThree").checked  )
                {
                    alert( "Cannot perform octal to octal conversion. Pick two different conversions." );
                }

                else if ( document.getElementById("optionThree").checked && document.getElementById("questionFour").checked  )
                {
                    window.location.href = "octalToHex.html";
                }
                
    // ======================================= HEX TO OTHER CONVERSIONS ==================================================================
                else if ( document.getElementById("optionFour").checked && document.getElementById("questionOne").checked  )
                {
                    window.location.href = "hexToDecimal.html";
                }

                else if ( document.getElementById("optionFour").checked && document.getElementById("questionTwo").checked  )
                {
                    window.location.href = "hexToBinary.html";
                }

                else if ( document.getElementById("optionFour").checked && document.getElementById("questionThree").checked  )
                {
                    window.location.href = "hexToOctal.html";
                }

                else if ( document.getElementById("optionFour").checked && document.getElementById("questionFour").checked  )
                {
                    alert( "Cannot perform hexadecimal to hexadecimal conversion. Pick two different conversions." );
                }
}

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
    if ( Boolean( window.location.href.indexOf("decimalToBinary") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }

    // ================================ DECIMAL TO OCTAL ================================
    else if ( Boolean( window.location.href.indexOf("decimalToOctal") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }
}

// Submit functions for octal conversions
function submitOctal()
{
    var counter = 0;

    // ================================ OCTAL TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("octalToDecimal") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }

    // ================================ OCTAL TO HEX ================================
    else if ( Boolean( window.location.href.indexOf("octalToHex") > -1 ) )
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 8 ); // Converts numberToCheck from octal to decimal
            if( userInput == answer.toString( 16 ) )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }
}

// Submit function for binary conversions
function submitBinary()
{
    var counter = 0;

    // ================================ BINARY TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("binaryToDecimal.html") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }

    // ================================ BINARY TO OCTAL ================================
    else if ( Boolean( window.location.href.indexOf("binaryToOctal") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }
}

// Submit function for hex conversions
function submitHex()
{
    var counter = 0;

    // ================================ HEX TO DECIMAL ================================
    if ( Boolean( window.location.href.indexOf("hexToDecimal") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }

    // ================================ HEX TO BINARY ================================
    else if ( Boolean( window.location.href.indexOf("hexToBinary") > -1 ) )
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
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }

    // ================================ HEX TO OCTAL ================================
    else 
    {
        for( var index = 1; index <= 3; index++ )
        {
            var userInput = document.getElementById( "input" + index ).value;
            var numberToCheck = document.getElementById( "randomNumber" + index).value;
            var answer = parseInt( numberToCheck, 16 ); // Converts numberToCheck from hex to decimal
            if( userInput == answer.toString( 8 ) )
            {
                counter += 1;
            }
        }
        if( counter == 3 )
        {
            db_log(student_id, 2, 1, true, 0, mistakes, 1);

            alert( "Congrats, you passed this page!" );
            // Move onto next page
            window.location.href = "practiceModuleTwoQuestion.html";
        }
        else
        {
            document.getElementById( "incorrectAnswerMessage" ).innerHTML = "Not all answers are correct.";
            mistakes++;
        }
    }
}

// Gives hint to user
function receiveHint()
{
    // If current window is binary conversions
    if( Boolean( window.location.href.indexOf( "binaryToDecimal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the binary system is base-2...";
    }

    else if( Boolean( window.location.href.indexOf( "binaryToOctal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the binary system is base-2...";
    }

    else if( Boolean( window.location.href.indexOf( "binaryToHex" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the binary system is base-2...";
    }

    // If current window is decimal conversions
    else if( Boolean( window.location.href.indexOf( "decimalToBinary" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the decimal system is base-10...";
    }

    else if( Boolean( window.location.href.indexOf( "decimalToOctal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the decimal system is base-10...";
    }

    else if( Boolean( window.location.href.indexOf( "decimalToHex" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the decimal system is base-10...";
    }

    // If current window is octal conversions
    else if( Boolean( window.location.href.indexOf( "octalToBinary" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the octal system is base-8...";
    }

    else if( Boolean( window.location.href.indexOf( "octalToDecimal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the octal system is base-8...";
    }

    else if( Boolean( window.location.href.indexOf( "octalToHex" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the octal system is base-8...";
    }

    // If current window is hexadecimal conversions
    else if( Boolean( window.location.href.indexOf( "hexToBinary" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the hexadecimal system is base-16...";
    }

    else if( Boolean( window.location.href.indexOf( "hexToDecimal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the hexadecimal system is base-16...";
    }

    else if( Boolean( window.location.href.indexOf( "hexToOctal" ) > -1 ) )
    {
        document.getElementById( "hint" ).innerHTML = "Keep in mind that the hexadecimal system is base-16...";
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