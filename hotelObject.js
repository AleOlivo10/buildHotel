var readline = require('readline-sync');
var name = readline.question("Welcome to Welcome to the LUX Hotel, what is your name? ");
console.log("It's lovely to meet you, " + name + " !");

var luxHotel = {
    room1: "The Wedding Suite",
    room2: "The Platinum Suite",
    room3: "The Princess Suite",
    room4: "The Diamond Suite",
    amenities: ["hotTub", "pool", "gym", "sauna"]
};

var yes = readline.question("Would you like to see what suites we have available? ");

var roomArray = ["The Wedding Suite", "The Platinum Suite", "The Princess Suite", "The Diamond Suite"]
for (var i = 0; i < roomArray.length; i++)
console.log(roomArray[i]);
console.log(STUFF WITH AMENITIES)

//instead of using an object with arrays inside of it, use arrays with objects inside of it
