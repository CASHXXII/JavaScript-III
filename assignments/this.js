/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If no other rules applied, this defaults to the entire window object
* 2. Implicit Binding - When the function is invoked, this referes to what's to the left of the dot
* 3. New Binding - using the NEW keyword constructs a new object, and this points to it
* 4. Explicit Binding - This is called by passing it in as an argument when invoking the function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const superHero = {
    name: 'superman',
    age: 100,
    location: 'earth',
    greet: function(){
        return `${this.name} still saving ${this.location} at ${this.age} years old!`;
    }
}

console.log(superHero.greet());


// Principle 3

// code example for New Binding

function Food(favorite){
    this.cuisine = favorite;
}

let myFavoriteFood = new Food('italian');

console.log(`My favorite food is ${myFavoriteFood.cuisine}`);


// Principle 4

// code example for Explicit Binding

function callOfTheWild(){
    console.log(`${this.name} says ${this.sound}`);
}

const dog = {
    name: 'ada',
    species: 'dog',
    sound: 'woof woof'
}

callOfTheWild.call(dog);