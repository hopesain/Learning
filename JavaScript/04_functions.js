function celciusToKelvins(celcius) {
    return celcius + 273
}

function kelvinToCelcius(kelvin) {
    return kelvin - 273
}

let value = celciusToKelvins(18)
console.log(value + " Kelvins")


const add = (a, b) => a + b

console.log(add(2, 3))


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