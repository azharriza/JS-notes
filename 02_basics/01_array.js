// ------------- array -------------------

const myArr = [1, 3, 5, 7, 9, 3];
const myHeroes = ["iron man", "thor"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]);

// ---------- Array methods -------------

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(10); // add item at start
// myArr.shift();

// console.log(myArr.includes(9)); // return true or false
// console.log(myArr.indexOf(9)); // return index of passing parameter

// const newArr = myArr.join(); // return string comma separated

// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A ", myArr);

const myNarr1 = myArr.slice(1, 3); // return index 1 to 2 not include 3 and no change in original array
// console.log(myNarr1);
// console.log("B ", myArr);

const myNarr2 = myArr.splice(1, 3); // return index 1 to 3 but change in original array
// console.log(myNarr2);
// console.log("C ", myArr);
