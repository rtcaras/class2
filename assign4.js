
function Movie(title, director) {
    this.title = title; 
    this.director = director; 
    this.isPlaying = false; 
  
   
    this.play = function() {
      if (this.isPlaying) {
        return "The movie is already playing.";
      }
      this.isPlaying = true;
      return "Playing the movie: " + this.title + ".";
    };
  
    
    this.getDetails = function() {
      return "Title: " + this.title + ", Director: " + this.director + 
             ", Is Playing: " + (this.isPlaying ? "Yes" : "No") + ".";
    };
  }
  

  let movie1 = new Movie("Inception", "Bimbe Ademoye");
  
 
  console.log(movie1.getDetails()); 
  console.log(movie1.play()); 
  console.log(movie1.getDetails()); 
  