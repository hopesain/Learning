const cars = ["Toyota", "Ford", "Navara"]

cars.push("Mazda")

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index])
}

console.log(typeof cars)

// Array Iterations.

// Map.
const tempInCelcious = [23, 16, 18, 31, 35, 27, 24]

const tempInKelvins = tempInCelcious.map(celciusToKelvins)

function celciusToKelvins(reading) {
    return reading + 273
}

console.log(tempInKelvins)

// Reduce.
const expenses = [18000, 32000, 53000, 8000, 175000, 41000]

const totalExpenses = expenses.reduce(sum, 0)

function sum(total, amount) {
    return total + amount
}

console.log(totalExpenses)

const highestExpense = expenses.reduce(getHighestAmount, 0)

console.log(highestExpense)

function getHighestAmount(highestAmount, amount) {
    if (amount > highestAmount) {
        highestAmount = amount
    }
    return highestAmount
}

const cart = [
    {item: "Phone", price: 600000},
    {item: "Laptop", price: 1140000}
]

const totalAmount = cart.reduce(totalPriceInCart, 0)

function totalPriceInCart(total, item) {
    return total + item.price
}

console.log(totalAmount)

// Filter.
const usersAge = [23, 14, 47, 31, 25, 18]

const eligibleUsers = usersAge.filter(age => age > 17)

console.log(eligibleUsers)

// Find.
const costs = [43, 33, 28, 53, 66, 90]

const greaterThan50 = costs.find(cost => cost > 50)

console.log(greaterThan50)

costs.sort()

console.log(costs)
