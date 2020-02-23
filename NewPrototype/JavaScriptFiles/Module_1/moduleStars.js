var userStars = 0;
var moduleOneMaxStars = 12;

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}