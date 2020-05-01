function checkForDuplicates( arrayOne, arrayTwo )
{    
    var string = "";

    if ( arrayTwo != null )
    {
        for ( var arrayOneIndex = 0; arrayOneIndex < arrayOne.length; arrayOneIndex++ )
        {
            for ( var arrayTwoIndex = 0; arrayTwoIndex < arrayTwo.length; arrayTwoIndex++ )
            {
                if ( arrayOne[arrayOneIndex] == arrayTwo[arrayTwoIndex] )
                {
                    if ( arrayOneIndex == 0 )
                    {
                        iOneDup = true;
                        string += "Duplicate found 1! ";
                    }

                    else if ( arrayOneIndex == 1 )
                    {
                        iTwoDup = true;
                        string += "Duplicate found 2! ";
                    }

                    else if ( arrayOneIndex == 2 )
                    {
                        iThreeDup = true;
                        string += "Duplicate found 3! ";
                    }

                    else if ( arrayOneIndex == 3 )
                    {
                        iFourDup = true;
                        string += "Duplicate found 4! ";
                    }
                }
            }
        }
    }

    // Added string to use for test
    return string;
}

module.exports = checkForDuplicates;