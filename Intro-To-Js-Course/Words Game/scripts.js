var questions = 3;
var questionsLeft = '[' + questions + 'questions left]';
alert('Welcome to the Funny Sentences Game! :)');
var noun = prompt('Please tell me a noun' +questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + 'questions left]';
var verb = prompt('Please tell me a verb' + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + 'questions left]';
var adjective = prompt ('Please tell me an adjective' + questionsLeft);
alert('Thank you, here is your story!');
document.write("silly "+ noun + " often " + verb + " very " + adjective);