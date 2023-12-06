const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: "Unlocking Android",
        genre: "technology",
        publish: 2009,
        edition: 2020
    },
    {
        title: "Python and Tkinter Programming",
        genre: "programming",
        publish: 2000,
        edition: 2014
    },
    {
        title: "Azure in Action",
        genre: "cloud",
        publish: 2010,
        edition: 2022
    },
    {
        title: "Illustrated Guide to HTTP",
        genre: "technology",
        publish: 1997,
        edition: 2021
    },
    {
        title: "R in Action",
        genre: "programming",
        publish: 2011,
        edition: 2019
    },
    {
        title: "Hadoop in Action",
        genre: "cloud",
        publish: 2010,
        edition: 2023
    },
    {
        title: "Programming Mac OS X",
        genre: "programming",
        publish: 2003,
        edition: 2022
    },
]

const newBooks = books.filter((book) => {
    return book.genre === "programming" && book.publish > 2005
})

console.log(newBooks);