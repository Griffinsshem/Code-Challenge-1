
function calculateChaiIngredients(numberOfCups) {
  let water = 200; // in ml
  let milk = 50; // in ml
  let teaLeaves = 1; // tablespoon
  let sugar = 2; // teaspoons 

  // required ingredients
  const requiredWater = numberOfCups * water;
  const requiredMilk = numberOfCups * milk;
  const requiredTeaLeaves = numberOfCups * teaLeaves;
  const requiredSugar = numberOfCups * sugar;

  // Output results to console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${requiredWater} ml`);
  console.log(`Milk: ${requiredMilk} ml`);
  console.log(`Tea Leaves (Majani): ${requiredTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${requiredSugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}

// Prompt user for input
const userPrompt = prompt("Karibu! How many cups of Chai Bora would you like to make?:");
const numberOfCups = parseInt(userPrompt, 10);