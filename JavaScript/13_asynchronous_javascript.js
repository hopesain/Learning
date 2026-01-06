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


// Promises.

const takenUsernames = ["hopesain", "trevor", "sain", "denis"]

function checkUsernameAvailability(username) {
    return new Promise(
        function(resolve, reject) {
            setTimeout(
                function() {
                    if (takenUsernames.includes(username)) {
                        reject("Username already taken")
                    } else {
                        resolve("Username is available")
                    }
                }, 1000)
        }
    )
}

checkUsernameAvailability("nongwa")
.then(
    function(message) {
        console.log("SUCCESS: ", message)
        return "Account created"
})

.catch(
    function(error) {
        console.log("ERROR: ", error)
    }
)

function prepareMeal() {
    mealPrepared = true 

    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (mealPrepared) {
                        resolve("Meal has been prepared and ready for consumption")
                    } else {
                        reject("Bro, you better get ready cos it is about to be messy")
                    }
                }
            , 2000)
        }
    )
}

function eatMeal() {
    mealEaten = true

    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (mealEaten) {
                    resolve("Meal eaten, stay healthy")
                } else {
                    reject("Are you sure you do not wanna eat?")
                }
                }, 1500)
        }
    )
}

function cleanDishes() {
    dishesCleaned = true

    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (dishesCleaned) {
                        resolve("Dishes cleaned")
                    } else {
                        reject("Do you really wanna do this.")
                    }
                }, 3000)
        }
    )
}

prepareMeal().then(value => {console.log(value); return eatMeal()})
             .then(value => {console.log(value); return cleanDishes()})
             .then(value => {console.log(value); console.log("All tasks completed")})
             .catch(value => console.error(value))
