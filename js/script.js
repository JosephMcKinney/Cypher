var userInput = prompt("Please input a sentence.");
console.log(userInput);
var wordCypher = function(input){
  var firstLetter = userInput.charAt(0).toUpperCase();
  var lastLetter = userInput.slice(-1).toUpperCase();
  var output = lastLetter + firstLetter;
  console.log(userInput + output);
};

wordCypher(userInput)
