var userStars = 0;
var moduleTwoMaxStars = 90; // 30 questions in module, 1 star per question

function passUserStars( variable )
{
    userStars = variable;
    localStorage.setItem( "updatedUserStars", userStars );
    return false;
}