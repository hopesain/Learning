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

// Polymorphism
class PaymentProcessor {
    processPayment(amount) {
        throw new Error("processPayment must be implemented by child classes.")
    }
}

class PayChanguPayment extends PaymentProcessor {
    processPayment(amount) {
        return `${amount} paid using PayChangu.`
    }
}

class OneKhusaPayment extends PaymentProcessor {
    processPayment(amount) {
        return `${amount} paid using OneKhusa.`
    }
}

class PawaPayPayment extends PaymentProcessor {
    processPayment(amount) {
        return `${amount} paid using PawaPay.`
    }
}

class Pay {
    constructor(paymentProcessor) {
        this._paymentProcessor = paymentProcessor
    }

    makePayment(amount) {
        return this._paymentProcessor.processPayment(amount)
    }
}

const firstPayment = new Pay(new OneKhusaPayment)
console.log(firstPayment.makePayment(4000))

const secondPayment = new Pay(new PayChanguPayment)
console.log(secondPayment.makePayment(10000))