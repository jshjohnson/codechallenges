/* Week 2 - Code Challenge 2
* Aim: An introduction to objects
*/
console.log('-------------------------');
console.log('Week 2 - Challenge 2 has been included!');
console.log('-------------------------');

console.log('-------------------------');
console.log('Task 1 - Create a person');
console.log('-------------------------');
// Task 1: Can you create a new varaible named product.
// It should have the following properties
// name - Unlimited Infinity
// type - an array containing 'unlimited' and 'fibre'
// price - 30
// discount - 10
var product = {};

/* Tests*/
testChallenge2Task1(product);

console.log('-------------------------');
console.log('Task 2 - Checking for properties');
console.log('-------------------------');
// You can check if a object has a certain property. This is really useful for testing for errors.
// Example: console.log(product.hasOwnProperty('propertyName'));
// Can you check if your object product has the property showDiscount?


// Can you now add the property showDiscount which should be false (boolean) to your object
// Example:
// var testObject = {};
// console.log(testObject.hasOwnProperty('name')); // returns false.
// testObject.name = 'A test Object';
// console.log(testObject.hasOwnProperty('name')); // return true



// Can you now print out whether your product show show the discount or not

console.log('-------------------------');
console.log('Task 3 - Updating Objects');
console.log('-------------------------');
// Unlimited Infinity is now considered the best package.
// Can you add 'best' to the product.type array


/* Tests */
testChallenge2Task3(product);

console.log('-------------------------');
console.log('Task 4 - Make a person');
console.log('-------------------------');
// Can you create a person object.
// the person should have a name, age, job, interests (at least three)
var person = {};


console.log('-------------------------');
console.log('Task 5 - Make another person');
console.log('-------------------------');
// Can you create another person object.
// the person should have a name, age, job, interests (at least three)
var person2 = {};

console.log('-------------------------');
console.log('Task 6 - Make a family');
console.log('-------------------------');
// We now have two people. person and person2. These are our family.
// Can you put these two people into a family array?
var family = [];

// Console log out the first person in your family (using the family variable only)

// Console log out the second person in your family (using the family variable only)

console.log('-------------------------');
console.log('Task 7 - Birthday time');
console.log('-------------------------');
// It's person2's birthday today!
// We need to update our family variable to ensure the age is correct.
// Can you update the family varaible to ensure person2 has the correct age. 
