// for of loop ----------

const superHeroes = ['ironman', 'thor', 'hulk', 'superman', 'vision']

for (const superHero of superHeroes) {
    // console.log(superHero);    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);    
}

// Maps -------------

const map = new Map()

map.set("IN", "India")
map.set("USA", "United States Of Amaerica")
map.set("FR", "France")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);   
// }

// Iterate object in forof ----------------
// object is not iterable with forof

// const myObj = {
//     "game1": "BGMI",
//     "game2": "COD"
// }

// for (const [key, value] of myObj) {
//     console.log(`${key} :- ${value}`);