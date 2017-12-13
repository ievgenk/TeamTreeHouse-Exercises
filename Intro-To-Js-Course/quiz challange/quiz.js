
//First Question

var firstAnswer = prompt('Second biggest country in the world?');
if (firstAnswer === 'Canada') {
    firstAnswer = true;
    totalScore = 1;
    alert('That is right!');
}
else {
    alert('Unfrotunately that is not the correct answer, but you will get it next time!');
}


//Second Question

var secondAnswer = prompt('What is a capital of Canada?');
if (secondAnswer === 'Ottawa') {
    secondAnswer = true;
    totalScore += 1;
    alert('That is right!');
}
else {
    alert('Unfrotunately that is not the correct answer, but you will get it next time!');
}

//Third Question

var thirdAnswer = prompt('Un-official symbol of Canada?');
if (thirdAnswer === 'Beaver') {
    thirdAnswer = true;
    totalScore += 1;
    alert('That is right!');
}
else {
    alert('Unfrotunately that is not the correct answer, but you will get it next time!');
}

//Fourth Question

var fourthAnswer = prompt('What country does Canada have a land border with?');
if (fourthAnswer === 'America') {
    fourthAnswer = true;
    totalScore += 1;
    alert('That is right!');
}
else {
    alert('Unfrotunately that is not the correct answer, but you will get it next time!');
}

//Fifth Question

var fifthAnswer = prompt('Best Canadian Export?');
if (fifthAnswer === 'Maple Syrup') {
    fifthAnswer = true;
    totalScore += 1;
    alert('That is right!');
}
else {
    alert('Unfrotunately that is not the correct answer, but you will get it next time!');
}
alert('Your total score is ' + totalScore + ' and you have answered ' + totalScore + ' questions correctly!');

// Ranking the player
if (totalScore === 5) {
    alert('Wow, you deserve a gold crown!');
}
else if (totalScore === 4 || totalScore === 3) {
    alert('You get a silver crown!');
}
else if (totalScore === 2 || totalScore === 1) {
    alert('You get a bronze crown!')
}

else {
    alert('Sorry you lost! :(');
}
