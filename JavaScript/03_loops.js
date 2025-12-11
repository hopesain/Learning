names = ["Hope", "Tre", "Rad", "Innocent"]

for (let username of names) {
    console.log(username)
}

//FizzBuzz
for (let number = 1; number < 50; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else if ( number % 3 === 0) {
        console.log("Fizz")
    } else if (number % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}