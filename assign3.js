function Book(title, author, totalPages) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = 0;
  
    this.readPages = function (pages) {
      if (pages <= 0) {
        return "The number of pages to read must be greater than zero.";
      }
      if (this.pagesRead + pages > this.totalPages) {
        return "You cannot read more than " + this.totalPages + " pages in total.";
      }
      this.pagesRead += pages;
      return "You have now read " + this.pagesRead + " out of " + this.totalPages + " pages.";
    };
  
    this.getDetails = function () {
      return "Title: " + this.title + ", Author: " + this.author + ", Pages Read: " + this.pagesRead + "/" + this.totalPages;
    };
  }
  
  let myBook = new Book("Things Fall Apart", "Chinua Achebe", 310);
  
  console.log(myBook.getDetails());  
  console.log(myBook.readPages(50));  
  console.log(myBook.readPages(300));
  console.log(myBook.readPages(260)); 
  console.log(myBook.getDetails());   
  