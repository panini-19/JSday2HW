//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
const p3favefoods = (person3) => {
    // loops through each property (key)
    for (let key in person3) {
        // checks to see if key is array
        if (Array.isArray(person3[key])) {
            // if it is a array, prints the key with a ":"
            console.log(`${key}:`);
            //loops through each item in array
            person3[key].forEach(item => {
                //checks if item is string
                if (typeof item === 'string') {
                    // if the item is a string, list it with "~"
                    console.log(`~ ${item}`);
                //if itme is not a string, reloops through again
                } else {
                    for (let key in item) {
                        //lists each restaurant chain along with the person's favorite shake
                        console.log(`~ ${key}: ${item[key]}`);
                    }
                }
            });
            //if key is not an array but a string, list with ":" followed by the values
        } else if (typeof person3[key] === 'string') {
            console.log(`${key}: ${person3[key]}`);
        }
    }
}

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
p3favefoods(person3);


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

// Use an arrow to create the printInfo method
printInfo = () => `I am ${this.name} and I am ${this.age}`
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
plus1 = (year) => {
    this.age += year;
}
}
let person1 = new Person('Dylan', 99)
let person2 = new Person('Christian', 100)

person2.plus1(3)

console.log(person1.printInfo());
console.log(person2.printInfo());
// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
const driverStandings = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
}
driverStandings()

//CodeWars:

// 1) Even Or Odd: Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

// Python Solution: 
// def even_or_odd(number):
//       return 'Even' if number % 2 == 0 else 'Odd'

// JS Solution:
const even_or_odd = (num) => {
    if (num % 2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(even_or_odd(3))

// 2) Beginner Series #2 Clock:Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// Python Solution:
// def past(h, m, s):
// return h*60*60*1000+m*60*1000+1000*s
// print(past(0,1,1))

// JS Solution:
function past (h, m, s) {
    return h*60*60*1000+m*60*1000+1000*s
}
console.log(past(0, 1, 1))