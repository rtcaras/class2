
function Library(name, books) {
    this.name = name;         
    this.books = books || []; 
  
  
    this.addBook = function(book) {
      if (!book || typeof book !== "string") {
        return "Invalid book name.";
      }
      this.books.push(book); 
      return "Book added: " + book + ".";
    };
  
  
    this.getDetails = function() {
      let bookList = this.books.length > 0 ? this.books.join(", ") : "No books available.";
      return "Library Name: " + this.name + ", Books: " + bookList + ".";
    };
  }
  

  let myLibrary = new Library("City Library");
  
  
  console.log(myLibrary.getDetails()); 
  console.log(myLibrary.addBook("The Great Gatsby")); 
  console.log(myLibrary.addBook("1984")); 
  console.log(myLibrary.getDetails()); 
  console.log(myLibrary.addBook("To Kill a Mockingbird")); 
  console.log(myLibrary.getDetails());