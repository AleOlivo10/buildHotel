var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["102", "103", "104", "105", "106"],
    roomNumbersBooked: ["101"],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() {
        //length of the number of rooms available
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        //avail rooms plus booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function(position) {
        //only book a room if one or more are available
        if (this.roomNumbersAvailable > 0) {
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            PRACTICE THIS ON YOUR OWN
            this.roomNumbersAvailable.splice(position, 1)
            var removedItem = this.roomNumbersAvailable.splice(position, 1)
            this.roomNumbersBooked.push(removedItem)
            
        } else {

        }
            
            
        }
    }
};



//sandbox below

var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log( ar ); // [1, 2, 3, 4, 5]


var removedPop = ar.pop()