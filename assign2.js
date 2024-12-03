
function Product(productName, price) {
    this.productName = productName; 
    this.price = price; 
  
    // Step 2: Method to apply a discount
    this.applyDiscount = function(discount) {
      if (discount < 0 || discount > this.price) {
        return "Invalid discount value.";
      }
      this.price -= discount; // Reduce the price by the discount amount
      return "Discount applied. New price is " + this.price + ".";
    };
  
    
    this.getDetails = function() {
      return "Product: " + this.productName + ", Price: " + this.price + ".";
    };
  }
  
 
  let product1 = new Product("Laptop", 10000);
  
  console.log(product1.getDetails()); 
  console.log(product1.applyDiscount(8000)); 
  console.log(product1.getDetails()); 
  