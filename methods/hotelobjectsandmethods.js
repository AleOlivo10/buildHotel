var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
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
             var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)]
            //this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
           //add number to booked room
           //this.roomNumbersBooked.push(randomRoom);
           //this.roomNumbersBooked = this.roomNumbersBooked.concat(randomRoom);
           
           this.roomNumbersBooked = this.roomNumbersBooked.unshift(randomRoom);
           console.log(this.roomNumbersBooked)
        }
    }
};

//couldnt make this work. it takes a room out of this.roomNumbersAvailable and seems to insert a position into this.roomNumbersBooked
//but it doesnt insert the actual string and then it wont let me use the bookRoom() method more than once
