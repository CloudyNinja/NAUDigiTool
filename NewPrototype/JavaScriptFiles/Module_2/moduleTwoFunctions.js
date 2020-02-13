
// Global variables
var randomNum = Math.floor( ( Math.random() * 1000 ) + 1 ) 
var randomNum2 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum3 = Math.floor( ( Math.random() * 1000 ) + 1 )
var randomNum4 = Math.floor( ( Math.random() * 1000 ) + 1 )

// Generates random decimal number
function random()
{
    document.getElementById("randomNumber1").innerHTML = randomNum
    document.getElementById("randomNumber2").innerHTML = randomNum2
    document.getElementById("randomNumber3").innerHTML = randomNum3
    document.getElementById("randomNumber4").innerHTML = randomNum4
}

// Checks if hex value is correct
function submitHex()
{
    var answer = randomNum.toString(16)
    var userInput = document.getElementById("hex").value
    if( userInput.toUpperCase() == answer.toUpperCase() )
    {
        alert("Congratulations, correct answer!")
    }
    else
    {
    alert("Incorrect, try again.")
    }

    var answer2 = randomNum2.toString(16)
    var userInput2 = document.getElementById("hex2").value
    if( userInput2.toUpperCase() == answer2.toUpperCase() )
    {
        alert("Congratulations, correct answer!")
    }
    else
    {
    alert("Incorrect, try again.")
    }

    var answer3 = randomNum3.toString(16)
    var userInput3 = document.getElementById("hex3").value
    if( userInput3.toUpperCase() == answer3.toUpperCase() )
    {
        alert("Congratulations, correct answer!")
    }
    else
    {
    alert("Incorrect, try again.")
    }

    var answer4 = randomNum4.toString(16)
    var userInput4 = document.getElementById("hex4").value
    if( userInput4.toUpperCase() == answer4.toUpperCase() )
    {
        alert("Congratulations, correct answer!")
    }
    else
    {
    alert("Incorrect, try again.")
    }
}

// Checks if octal value is correct
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

// Gives hint to user
function receiveHint()
{
    if ( Boolean( window.location.href.indexOf("moduleTwoQuestionOne") > -1 ) )
    {
        document.getElementById("hint").innerHTML = "Fill in later";
    }
}

function resetEquation()
{
    document.getElementById("hex").value = ""
    location.reload()
}