// SetTimeout.

function greetUser() {
    console.log("Hello Hope.")
}

setTimeout(greetUser, 3000)

console.log("Welcome to Asynchronous Programming with JavaScript")

//setTimeOut and clearTimeout.
let number = 0

function incrementNumber() {
    number += 1

    console.log(number)
}

let id = setTimeout(incrementNumber, 3000)

clearTimeout(id)
console.log("setTimeout has been stopped.")

