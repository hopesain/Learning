// Declaring a variable with const.
// Always use const if the values should not be changed.
// Always use const if the type should not be changed (Objects and Arrays).

const username = "Hope"
const age = 23

console.log(username, age)

//Const variables cannot be reassigned.
const daysInAWeek = 7
//daysInAWeek = 5 : This returns an error.

//The const keyword does not define a constant value. But it defines a constant to a reference.
// This means that you can change the elements of a constant array and the properties of a constant object.

// Constant Array.
const users = ["hopesain", "trevor", "zikani", "innocent"]

//Change user at index 0 (first index of an array)
users[0] = "hope"

//Add user to the array
users.push("radson")

for (let user of users) {
    console.log(user)
}

// Constant Object.
const person = {
    firstName: "Hope",
    lastName: "Sain",
    age: 24,
}

console.log(person)

//Declaring variables with Let.

let staff = "Mafunso"

console.log(staff)

// JavaScript Types.
// String, Number, BigInt, Boolean, Object, Undefined, Null, Symbol.