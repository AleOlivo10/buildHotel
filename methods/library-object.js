var library = {
    name: "Local Library",
    booksAvailable: ["Harry Potter", "Amelia Bedelia", "Curious George", "Frankenstein", "Ender's Game", "Dracula"],
    checkedOutBooks: [],
    
    totalAvailable: function() {
        return this.booksAvailable.length;
    },
    totalCheckedOut: function() {
        return this.checkedOutBooks.length;
    },
    allBooks: function() {
        return this.booksAvailable.length + this.checkedOutBooks.length;
    },
    titles: function() {
        console.log ("\nThese books are available:\n");
        for (var i = 0; i < this.booksAvailable.length; i++) {
           
          console.log(this.booksAvailable[i]);
          //fix this
        }
        console.log("\nThese books are checked out:\n");
        
         for (var x = 0; x < this.checkedOutBooks.length; x++) {
          console.log(this.checkedOutBooks[x]);
         }
    },
    checkBookOut: function() {
        if (this.totalAvailable() > 0) {
            var bookChoice = this.booksAvailable[Math.floor(Math.random()*this.booksAvailable.length)];
            this.booksAvailable.splice(this.booksAvailable.indexOf(bookChoice), 1);
            this.checkedOutBooks = this.checkedOutBooks.concat(bookChoice);
            console.log("Currently checked out:", this.checkedOutBooks);
        } else {
         console.log("No more books available.");   
        }
    },
    checkBookIn: function() {
     if (this.totalCheckedOut() > 0) {
         var bookReturn = this.checkedOutBooks[Math.floor(Math.random()*this.checkedOutBooks.length)];
         this.checkedOutBooks.splice(this.checkedOutBooks.indexOf(bookReturn), 1);
         this.booksAvailable = this.booksAvailable.concat(bookReturn);
         console.log("Thank you for returning", bookReturn);
     } else {
         console.log("You've returned all your books, thank you!");
     }
    }
};
 