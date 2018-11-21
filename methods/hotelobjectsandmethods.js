var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    gettingCleaned: [],
    roomNumbersBooked: [],
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
    
    bookRoom: function() {
        //only book a room if one or more are available
        if (this.numberOfRoomsAvailable() > 0) {
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            //the Math. stuff makes your selection random 
             var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            //this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
           //add number to booked room
           //this.roomNumbersBooked.push(randomRoom);
           this.roomNumbersBooked = this.roomNumbersBooked.concat(randomRoom);
        }
           //this.roomNumbersBooked = this.roomNumbers.splice(this.roomNumbers.indexOf(randomRoom), 1).concat(this.roomNumbersBooked);
           //this.roomNumbersBooked = this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
           return this.roomNumbersBooked;
        },
        
        housekeeping: function() {
        if (this.roomNumbersBooked > 0) {
            var dirtyRoom = this.roomNumbersBooked[Math.floor(Math.random()*this.roomNumbersBooked.length)];
            this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(dirtyRoom), 1);
            this.gettingCleaned = this.gettingCleaned.concat(dirtyRoom);
            
        }
        return this.gettingCleaned;
    }
};

//Math.floor
//couldnt make this work. it takes a room out of this.roomNumbersAvailable and seems to insert a position into this.roomNumbersBooked
//but it doesnt insert the actual string and then it wont let me use the bookRoom() method more than once


//weekend HW: AVAILABLE ROOM -> CLEANINGING ROOM ->