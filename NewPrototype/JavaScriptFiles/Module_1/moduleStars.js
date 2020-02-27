var userStars = 0;
var moduleOneMaxStars = 18;

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}