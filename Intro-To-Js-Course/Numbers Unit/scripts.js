var secondsPerMin = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minutesPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day!');
var yearsAlive = secondsPerMin * minutesPerHour * hoursPerDay * daysPerWeek * weeksPerYear * 25;
document.write ('I have been alive for more than ' + yearsAlive + ' seconds!');