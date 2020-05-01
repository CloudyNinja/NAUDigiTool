function getTimeTaken( minutesPassed, secondsPassed )
{
    var minuteCounter = 0;
    var secondCounter = 0;
    var total = 0;
    
    while ( minutesPassed != 5 )
    {
        while ( secondsPassed != 60 )
        {
            secondCounter += 1;
            secondsPassed++;
        }
        
        minutesPassed += 1;
        
        if ( minutesPassed != 5 )
        {
            minuteCounter += 1;
        }
    }
    
    total = minuteCounter + " minutes " + secondCounter + " seconds ";
    return total;
}

module.exports = getTimeTaken;

