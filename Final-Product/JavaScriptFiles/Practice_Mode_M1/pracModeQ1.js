// 3 var truth table translation
var array = new Array(8);
var userArray = new Array(8);
var groupingArray = new Array(8);
var dontCare = 0;
var hint = 1;
var practiceMode = 1;

array = createArray(3);
userArray = createUserArray(3);
createTruthTable(3);
createKMap(3);

// Attempts Left Message
var starsGiven = 0;
var levelMaxStars = 0;
