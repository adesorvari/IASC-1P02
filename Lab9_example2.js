var age = prompt("What is your age: ");

var ageNum = Number(age);
var year = (new Date).getFullYear();
var birthYear = year - ageNum;

document.write("Your birth year is: " + birthYear);
