
function Recipe(name, ingredients) {
    this.name = name;                
    this.ingredients = ingredients || []; 
  
   
    this.addIngredient = function(ingredient) {
      if (!ingredient || typeof ingredient !== "string") {
        return "Invalid ingredient.";
      }
      this.ingredients.push(ingredient); 
      return "Ingredient added: " + ingredient + ".";
    };
  
    this.getDetails = function() {
      let ingredientList = this.ingredients.length > 0 ? this.ingredients.join(", ") : "No ingredients added.";
      return "Recipe Name: " + this.name + ", Ingredients: " + ingredientList + ".";
    };
  }
  
  let myRecipe = new Recipe("Pancakes");
  

  console.log(myRecipe.getDetails()); 
  console.log(myRecipe.addIngredient("Flour")); 
  console.log(myRecipe.addIngredient("Milk")); 
  console.log(myRecipe.getDetails()); 
  console.log(myRecipe.addIngredient("Eggs")); 
  console.log(myRecipe.getDetails()); 