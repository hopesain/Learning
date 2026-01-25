function check_availability(income: number): boolean {
    if (income < 10_000) {
        return true;
    }
    return false
}

let income: number = 100_000;

console.log(check_availability(income))

//Named Functions.
function add(first_number: number, second_number: number): number {
    return first_number + second_number;
}

let first_number = 5_000;
let second_number = 10_000;

console.log(add(first_number, second_number));

//Anonymous Functions
let multipy = function(first_number: number, second_number: number): number {
    return first_number * second_number;
}

console.log(multipy(first_number, second_number));