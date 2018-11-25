console.log("Welcome to the program."); // code that is written within the main/global scope of a program is executed automatically.
var hotel = { 
    name: "CareerDevs Hotel",
    
    sousChef: function(param1, param2) { // this is a method.
    // a method is a function within an object
    // lines of javascript code
    // more lines of code
    console.log("Welcome to the Method.");  // local scope to the method and also local to the object
    }
};
console.log("Welcome to the MIDDLE of the program.");

function sousChef(param1, param2) {  // this is a function and parameters are optional
    // lines of javascript code
    // more lines of code
    console.log("Welcome to the Function."); // local scope to the function
}

console.log("Welcome to the END of the program.");