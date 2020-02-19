var userStars = 0;
var moduleTwoMaxStars = 36; // Might need to change later

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}