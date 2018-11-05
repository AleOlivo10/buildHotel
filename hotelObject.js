var readline = require('readline-sync');
var guest = readline.question("Welcome to the LUX Hotel, what is your name? ");
console.log("It's lovely to meet you, " + guest + " !");

var luxHotel = {
    "The Wedding Suite" : {
    room: 1,
    name: "The Wedding Suite",
    price: 120,
    available: true,
},
    "The Platinum Suite" : {
    room: 2,
    name: "The Platinum Suite",
    price:220,
    available: true,
},
    "The Princess Suite" : {
    room: 3,
    name: "The Princess Suite",
    price: 150,
    available: true,
},
"The Diamond Suite" : {
    room: 4,
    name: "The Diamond Suite",
    price: 200,
    available: true,
}
};

var yesProbably = readline.question("Would you like to see what suites we have available? ");

if (yesProbably == "no") {
        console.log("Yeah, this is pricey spot. Have a great day, though!");
};
if (yesProbably == "yes") {
var roomArray = ["The Wedding Suite", "The Platinum Suite", "The Princess Suite", "The Diamond Suite"]
for (var i = 0; i < roomArray.length; i++)
console.log(roomArray[i]);

var amenities = ["HotTub", " Pool", " Gym", " Spa", "Complimentary Wifi", " Sauna", " Room-Service"];
console.log("And, of course, there are our amenities: " + amenities);

var roomChoice = readline.question("Which one of rooms would you be interested in booking? ");
//instead of using an object with arrays inside of it, use arrays with objects inside of it
console.log("That's a great choice, " + guest + ", " + luxHotel[roomChoice].name + " is " + luxHotel[roomChoice].price  + " per night. ");
};
