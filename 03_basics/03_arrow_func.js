const user = {
    username: "azhar",
    price: 299,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);  // return empty object

// function users() {
//     let username = "azhar";
//     console.log(this.username); // this keyword does not work in function
// }
// users();

// const users = () => {
//     let username = "azhar";
//     console.log(this);
// };
// users();

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(addTwoNumbers(4, 5));

/* // implicit return
const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(4, 5));

const addThreeNumbers = (num1, num2, num3) => (num1 + num2 + num3);
console.log(addThreeNumbers(4, 5, 7));
*/
