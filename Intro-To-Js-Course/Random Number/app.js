var firstNumberPropmt = prompt('Pick a number!');
var firstNum = parseInt(firstNumberPropmt);
var secondNumberPrompt = prompt('Pick a second number!');
var secondNum = parseInt(secondNumberPrompt);
var randomNum = (Math.floor(Math.random() * secondNum - firstNum + 1)) + firstNum ; 
alert(randomNum);