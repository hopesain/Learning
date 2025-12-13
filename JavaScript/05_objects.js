const person = {
    firstName: "Hope",
    lastName: "Sain",
    age: 24,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(person)
console.log(person.fullName())

function User(firstName, lastName, age, email) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.email = email,
    this.nationality = "Malawian"
}

const firstUser = new User("Hope", "Sain", 24, "hopesain@email.com")
const secondUser = new User("Trevor", "Makwinja", 25, "tre@email.com")

console.log(firstUser)
console.log(secondUser)

let text = JSON.stringify(firstUser)
console.log(text)