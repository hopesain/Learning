// Classes
console.log("Classes.")

class User {
    constructor(username, age) {
        this.username = username
        this.age = age
    }

    // Methods.
    greet() {
        return `Hello my username is ${this.username} and I am ${this.age} years old.`
    }
}

let firstUser = new User("hopesain", 24)
let secondUser = new User("trevor", 25)

console.log(firstUser.greet())
console.log(secondUser.greet())

// Inheritance 

class Student extends User {
    constructor(username, age, program) {
        super(username, age)
        this.program = program

    }

    getStudentInformation() {
        return `Student Name: ${this.username}, Student Age: ${this.age}, Program of Study: ${this.program}` 
    }
}

let firstStudent = new Student("Hope Sain", 24, "Agricultural Innovations")
console.log(firstStudent.getStudentInformation())