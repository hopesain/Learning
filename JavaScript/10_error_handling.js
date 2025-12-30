// Try and Catch.

function greetPerson(username) {
    try {
        if (username.length < 3) {
            throw new Error("username length cannot be less than 3")
        }
        return ("Hello " + username + ", we are hoping you will have a great time with us.")
    } 
    catch(error) {
        return error
    }
}

console.log(greetPerson("hope"))

