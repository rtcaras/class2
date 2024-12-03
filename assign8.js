
function FitnessTracker(owner, workouts) {
    this.owner = owner;               
    this.workouts = workouts || [];   
  
   
    this.logWorkout = function(workout) {
      if (!workout || typeof workout !== "string") {
        return "Invalid workout.";
      }
      this.workouts.push(workout); 
      return "Workout logged: " + workout + ".";
    };
  
   
    this.getDetails = function() {
      let workoutList = this.workouts.length > 0 ? this.workouts.join(", ") : "No workouts logged.";
      return "Owner: " + this.owner + ", Workouts: " + workoutList + ".";
    };
  }
  
  
  let myTracker = new FitnessTracker("Mary");

  console.log(myTracker.getDetails()); 
  console.log(myTracker.logWorkout("Running")); 
  console.log(myTracker.logWorkout("Cycling")); 
  console.log(myTracker.getDetails()); 
  console.log(myTracker.logWorkout("Yoga")); 
  console.log(myTracker.getDetails()); 