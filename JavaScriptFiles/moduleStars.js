var userStars = 0;
var moduleOneMaxStars = 6;

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}