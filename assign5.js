
function Pet(name, species, hungerLevel) {
    this.name = name; 
    this.species = species; 
    this.hungerLevel = hungerLevel; 
  
    
    this.feed = function() {
      if (this.hungerLevel === 0) {
        return this.name + " is not hungry.";
      }
      this.hungerLevel -= 1; 
      return "You fed " + this.name + ". Hunger level is now " + this.hungerLevel + ".";
    };
  
   
    this.getDetails = function() {
      return "Name: " + this.name + ", Species: " + this.species + 
             ", Hunger Level: " + this.hungerLevel + ".";
    };
  }
  

  let myPet = new Pet("Buddy", "Dog", 3);
  
  
  console.log(myPet.getDetails()); 
  console.log(myPet.feed()); 
  console.log(myPet.getDetails()); 
  console.log(myPet.feed()); 
  console.log(myPet.feed()); 
  console.log(myPet.feed()); 
  