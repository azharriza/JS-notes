// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: ", a);
}

// console.log(a);

function one() {
    const username = "azhar";

    function two() {
        const website = "www.google.com";
        console.log(username);
    }

    // console.log(website);

    two();
}

// one();

if (true) {
    const username = "azhar";

    if (username === "azhar") {
        const website = " youtube";
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// console.log(addtwo(6)); // execute successfully
function addtwo(num) {
    return num + 1;
}

// console.log(addTwo(5)); // error because function store in variable
const addTwo = function (num) {
    return num + 1;
};
