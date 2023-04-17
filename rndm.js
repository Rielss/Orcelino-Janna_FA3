var num1, num2, num3;

function random(){
	num1 = Math.ceil(Math.random()*20);
	document.getElementById("cappu").innerHTML = num1;

	num2 = Math.ceil(Math.random()*20);
	document.getElementById("affo").innerHTML = num2;

	num3 = Math.ceil(Math.random()*20);
	document.getElementById("moch").innerHTML = num3;   
	compare();

//*Math.ceil is necessary to round the random number to the nearest integer
}

var highestRate
function compare(){
	highestRate = num1;
	if(highestRate < num2){
		highestRate = num2;
	}
	if(highestRate < num3){
		highestRate = num3;
	}
}

var type
function coffee(){
	if(highestRate == num1){
		type = "Cappucino";
	}
	else if(highestRate == num2){
		type = "Affogato";
	}
	else if(highestRate == num3){
		type = "Mocha";
	}
	document.getElementById("bestBeverage").innerHTML = ("The coffee with the most number of positive likes is " + type);
}

var letter;
function nameCostumer(){
	letter = alphabet[num1-1];
	document.getElementById("commonName").innerHTML = ("The most common first letter of all the costumers today starts with the letter '" + letter + "'");
}

var timeMin, timeHr;
function timeTaken(){
	timeMin = num2 * num3;
    timeHr = Math.round((timeMin/60)*1000); //*To have a 3 digit decimal
	timeHr = timeHr/1000; //*Connected to the line above
	document.getElementById("affo").innerHTML = num2;
	document.getElementById("timeTook").innerHTML = ("The average time it took for all the costumers who bought " + type + " is " + timeMin + " minutes, or approximately " + timeHr + " hours.");
}

//*The array of the constant variables for the alphabet
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];