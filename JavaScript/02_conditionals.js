// If, else if, else.

let age = 10
let country = "Malawi"

if (age < 18 && country === "Malawi") {
    console.log("You are not eligible to drive.")
}

if (age < 12) {
    console.log("Child")
} else if (age < 18){
    console.log("Teenager")
} else {
    console.log("Adult")
}

// Ternary
// (condition) ? firstExpression (return value if true) : secondExpression (return value if false)
let category = (age < 18) ? "Minor" : "Adult"
console.log(category) 

// Switch Control Flow
let username = "hope"

switch (username) {
    case "hope":
        console.log("Correct")
        break
    case "benjamin":
        console.log("Incorrect")
        break
    default:
        console.log("Incorrect")
}