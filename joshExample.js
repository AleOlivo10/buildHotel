var Room1 = {avail:1, sqft:200, price: 300, balcony: "a balcony", view: "street view", smoking: "non-smoking"};
var Room2 = {avail:1, sqft:250, price: 350, balcony: "no balcony", view: "street view", smoking: "non-smoking"};
var Room3 = {avail:1, sqft:500, price: 375, balcony: "a balcony", view: "water view", smoking: "smoking"};
var Room4 = {avail:1, sqft:750, price: 400, balcony: "no balcony", view: "water view", smoking: "non-smoking"};

var readline = require("readline-sync");
var totrooms =Room1.avail+Room2.avail+Room3.avail+Room4.avail;

if (Room1.avail>0 || Room2.avail>0 || Room3.avail>0 || Room4.avail>0){
    var roomreq = readline.question("Would you like to book a hotel room?  We have "+totrooms+" room(s) available, Type Yes to see your room options ").toLowerCase();
    if (roomreq=="yes" || "sure" || "yea" || "yup"){
         var sqfeet = readline.question("What size room would you like " +Room1.sqft + "sqft, "+ Room2.sqft +"sqft, "+ Room3.sqft +"sqft, or " + Room4.sqft +"sqft? ")
            if (sqfeet== Room1.sqft){
                console.log("The room costs "+Room1.price+" USD.\nThe room has " +Room1.balcony+ " and a " + Room1.view+ " and is "+ Room1.smoking);
                if (Room1.avail==0){
                    console.log(", but the room is not available.")
                }
                else 
                {
                    var book=readline.question("Would you like to book this room? ").toLowerCase();
                    if (book=="yes" || "sure" || "yea" || "yup"){
                        Room1.avail=Room1.avail-1;
                        console.log("We currently have "+ Room1.avail+ " rooms remaining at this price.")
                    }
                }
            } 
            else if(sqfeet==Room2.sqft){
                console.log("The room costs "+Room2.price+" USD.\nThe room has " +Room2.balcony+ " and a " + Room2.view+ " and is "+ Room2.smoking);
                if (Room2.avail==0){
                    console.log(", but the room is not available.")
                }
                else 
                {
                    var book=readline.question("Would you like to book this room? ").toLowerCase();
                    if (book=="yes" || "sure" || "yea" || "yup"){
                        Room2.avail=Room2.avail-1;
                        console.log("We currently have "+ Room2.avail+ " rooms remaining at this price.")
                    }
                }
            }
            else if(sqfeet==Room3.sqft){
                console.log("The room costs "+Room3.price+" USD\nThe room has " +Room3.balcony+ " and a " + Room3.view+ " and is "+ Room3.smoking);
                if (Room3.avail==0){
                    console.log(", but the room is not available.")
                }
                else 
                {
                    var book=readline.question("Would you like to book this room? ").toLowerCase();
                    if (book=="yes" || "sure" || "yea" || "yup"){
                        Room3.avail=Room3.avail-1;
                        console.log("We currently have "+ Room3.avail+ " rooms remaining at this price.")
                    }
                }
            }
            else if(sqfeet==Room4.sqft){
                console.log("The room costs "+Room4.price+" USD\nThe room has " +Room4.balcony+ " and a " + Room4.view+ " and is "+ Room4.smoking);
                if (Room1.avail==0){
                    console.log(", but the room is not available.")
                }
                else 
                {
                    var book=readline.question("Would you like to book this room? ").toLowerCase();
                    if (book=="yes" || "sure" || "yea" || "yup"){
                        Room4.avail=Room4.avail-1;
                        console.log("We currently have "+ Room4.avail+ " rooms remaining at this price.");
                    }
                }
            }
            else {
                console.log("We are not the Waldof Astoria")
            }
    }

}
else {
    console.log("Try the Motel 6")
}