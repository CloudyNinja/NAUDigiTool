var array = new Array(16);
var userArray = new Array(16);
var groupingArray = new Array(16);
var dontCare = 1;

array = createArray(4);
userArray = createUserArray(4);
createTruthTable(4);
createKMap(4);

console.log( JSON.stringify( array ) );
userArray = createUserArray(3);

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;

