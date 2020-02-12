
// Global variable
var randomNum = Math.floor( ( Math.random() * 1000 ) + 1 ) 
var randomNum2 = Math.floor( ( Math.random() * 1000 ) + 1 )

function random()
{
    document.getElementById("randomNumber1").innerHTML = randomNum
    document.getElementById("randomNumber2").innerHTML = randomNum2
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
