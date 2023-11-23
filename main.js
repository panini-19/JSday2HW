
// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
const date = new Date().getDay()
switch (5) {
    case 1:
        console.log('Today is Mondayyyyy zzzzzz')
        break;
    case 2:
        console.log('Its a Tuesday....')
        break;
    case 3:
        console.log('Its Wednesday, officially the middle of the week')
        break;
    case 4:
        console.log('Its Thursday, almost Friday')
        break;
    case 5:
        console.log('Its Friday, Friday, got to get down on Friday')
        break;
    default:
        console.log('Its the WEEKEND BABY!')
}
// JS Objects (Python Dicts)
const favPlayer = {
    playerName: 'Kobe Bryant',
    playerNum: 24,
    playerTeam: 'LA Lakers'
}

// access data in objects (using bracket or dot notation)
console.log(favPlayer["playerName"])
console.log(favPlayer.playerTeam)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
        {
            baseball: "Chicago White Sox",
            football: "Chicago Bears",
            hockey: "Chicago Blackhawks",
            basketball: ["Chicago Bulls", "Chicago Sky"],
            soccer: ["Chicago Fire", "Naperville Yellowjacks"],
        },
        {
            baseball: "Toronto Bluejays",
            football: "LA Rams",
            basketball: "Milwalkee Bucks",
            soccer: ["Manchester United", "Liverpool"],
        },
    ],
};

// Solution Here:
console.log(person2.teams[1].soccer[0])

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for(let key in person2){
    console.log(person2[key])
}

// ---------- Creating a JS Class ----------
class Team{
    constructor(city, name){
        this.city = city
        this.name = name
    }

    printInfo = () => `The ${this.name} are from ${this.city}`
}

// Creating an instance
const lakers = new Team('LA', 'Lakers')
console.log(lakers.printInfo())

// Inheriting from a class using 'extends'
class Player extends Team{
    constructor(city, name, playerName){
        super(city,name)
        this.playerName = playerName
    }
    printInfo2 = () => `${this.playerName} plays for the ${this.city} ${this.name}`
    }

const lebronJames = new Player('LA', 'Lakers', 'Lebron James')
console.log(lebronJames.printInfo2())

// ---------- JS Closures ----------
let grandpa = 'grandpa'
function a(){
    let father = 'father'
    return function b(){
        let son = 'son'
        return function c(){
            return `${grandpa} -> ${father} -> ${son}`
        }
    }
}

console.log(a()()())

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.then((err) => {
    console.log('there was a problem handling your promise', err)
})

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData =async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
}
pokemonData()