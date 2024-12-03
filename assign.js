
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.course = null; 
   
    this.enrollInCourse = function(courseName) {
      if (!courseName) {
        return "Please provide a valid course name.";
      }
      this.course = courseName;
      return "Enrolled in " + courseName + " successfully.";
    };
  
    this.getDetails = function() {
      if (this.course === null) {
        return "Name: " + this.name + ", Age: " + this.age + ", No course enrolled.";
      }
      return "Name: " + this.name + ", Age: " + this.age + ", Course: " + this.course;
    };
  }
  
 
  let student1 = new Student("Alice", 20);
  

  console.log(student1.getDetails()); 
  console.log(student1.enrollInCourse("Math 101")); 
  console.log(student1.getDetails());
  