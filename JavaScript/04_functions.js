function celciusToKelvins(celcius) {
    return celcius + 273
}

function kelvinToCelcius(kelvin) {
    return kelvin - 273
}

let value = celciusToKelvins(18)
console.log(value + " Kelvins")


//Arrow Functions
console.log("arrow functions")
const add = (a, b) => a + b

console.log(add(2, 3))

const sayHello = () => "hello world"
console.log(sayHello())

const squareNumber = number => number * number
console.log(squareNumber(5))



//Closures 
console.log("Closures")

function myCounter(){
    let counter = 0
    return function() {
        counter += 1
        return counter
    }
}

const increment = myCounter()
console.log(increment())
console.log(increment())
console.log(increment())

const secondIncrement = myCounter()
console.log(secondIncrement())