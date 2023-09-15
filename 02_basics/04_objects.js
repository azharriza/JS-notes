// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "01";
tinderUser.name = "azzyy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "mohammad",
            lasName: "azhar",
        },
    },
};

// console.log(regularUser.fullName.userFullName.firstName);

// Right way to combine objects
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 }; // not combine objects
// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@fb.com",
    },
    {
        id: 2,
        email: "user2@fb.com",
    },
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return array of all keys of objects
// console.log(Object.values(tinderUser)); // return array of all values of objects
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

// Destructure of Object
const course = {
    name: "Javascript",
    price: 999,
    courseInstructor: "azhar",
};

// course.courseInstructor // common way to access object data

const { courseInstructor } = course;

// console.log(courseInstructor);

// {
//     "courseName": "Javascript",
//     "price": "free",
//     "instructor": "azhar"
// }

[{}, {}, {}];
