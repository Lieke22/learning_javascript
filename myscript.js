// Do a couple of console.logs 
console.log("Hello from myscript.js");
console.log("Hello again");

/* var name = prompt("What is your name?");
alert("Hello " + name);

name = "Nick";
console.log("The user's name is " + name);


/* console.log("Before");

if(false) {
	console.log("If block");
}

console.log("After");
*/

/*console.log("Before");

var counter = 10;*/

/*while (counter) {
	console.log('Hello World');
	console.log("Hi");
	counter = counter -1;
}

while (prompt("What is your name")) {
	console.log ("Got your name")
}*/
/*
for (var counter=10; counter; counter = counter - 1) {
	console.log("Hello world", counter)
}

console.log("After");*/

/*var friends = ["Nick", "Michael", "Amit", "Allison", "Jon"];
console.log(friends);
console.log(friends.length);

var friendNumber = 1;
console.log(friends[friendNumber]);

for(var i=0;i < friends.length; i+=1) {
	console.log(friends[i]);
}*/

/*var me = {
	first_name: "Jim",
	last_name: "Hoskins",
	"Employee Number" : 1
}

me.first_name = "James"

console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);
console["log"](me);

var key = "first_name"
console.log(me[key]);
*/

var sayHello = function () {
	var message = "Hello";
	message = message + "World!" ;
	console.log(message);
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function (num) {
	return num * 2;
}

debug(doubleNumber(7))

sayHello();

var x = 1
debug("x has been set")

sayHello();


x += 10;
var y = 100;
debug("x has been increased, y has been set");

sayHello();




