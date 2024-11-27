//Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newNumsArray = nums.map((num) => {
  const result = num * 2;
  console.log(result);
});

//Exercise 2 completed
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here
const [firstElement, secondElement] = pizzaToppings;

console.log(firstElement);
console.log(secondElement);

//Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

// Your code here
const { make, model } = car;
console.log(make, model);

//Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings_2 = ["Pineapple", "Olives", "Anchovies"];

// Your code here
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);
