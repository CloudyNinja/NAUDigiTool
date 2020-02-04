var userStars = 0;
var moduleOneMaxStars = 9;

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}