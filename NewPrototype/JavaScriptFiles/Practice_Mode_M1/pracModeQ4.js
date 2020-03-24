// 3 var truth table translation ( DC )
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 1;
var hint = 1;
var practiceMode = 1;

/*array[0] = 0;
array[1] = 1;
array[2] = 1;
array[3] = 1;
array[4] = 1;
array[5] = 0;
array[6] = 0;
array[7] = 1;*/

//console.log( JSON.stringify( array ) );

array = createArray(3);
createTruthTable(3);
createKMap(3);

console.log( JSON.stringify( array ) );
userArray = createUserArray(3);

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;