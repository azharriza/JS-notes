// Two ways to declare objects
// 1. constructor --> Object.create --> singletone
// 2. literals --> const jsUser = {}

// object literals

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Azhar",
  "full name": "Md Azharuddin",
  [mySymbol]: "myKey1",
  age: 20,
  location: "Kolkata",
  email: "azhar@facebook.com",
  isLoggedIn: false,
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// changing value
jsUser.email = "azhar@microsoft.com";
// Object.freeze(jsUser);
// jsUser.email = "azhar@insta.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hi JS user");
};

jsUser.greetingTwo = function () {
  console.log(`Hi JS user, ${this.name}`);
};
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
