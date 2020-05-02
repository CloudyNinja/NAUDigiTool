var userStars = 0;
var moduleTwoMaxStars = 20;

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}