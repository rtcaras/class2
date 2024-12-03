
function Car(make, model) {
    this.make = make;         
    this.model = model;        
    this.engineStatus = false; 
  
   
    this.startEngine = function () {
        if (this.engineStatus) {
          return "The engine is already running.";
        }
        this.engineStatus = true;
        return "The engine is now running.";
      };
  
    
      this.stopEngine = function () {
        if (!this.engineStatus) {
          return "The engine is already off.";
        }
        this.engineStatus = false;
        return "The engine is now stopped.";
      };
  }
  
  
  let myCar = new Car("Toyota", "Corolla");
  

  console.log(myCar.startEngine()); 
  console.log(myCar.startEngine()); 
  console.log(myCar.stopEngine());  
  console.log(myCar.stopEngine());  
  