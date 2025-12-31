// Classes
console.log("Classes.")

class Person {
    constructor(username, age) {
        this.username = username
        this.age = age
    }

    // Methods.
    greet() {
        return `Hello my username is ${this.username} and I am ${this.age} years old.`
    }
}

let firstPerson = new Person("hopesain", 24)
let secondPerson = new Person("trevor", 25)

console.log(firstPerson.greet())
console.log(secondPerson.greet())