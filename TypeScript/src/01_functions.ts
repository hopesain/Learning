let first_number = 5_000;
let second_number = 10_000;

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
console.log(add(first_number, second_number));

//Anonymous Functions
let multipy = function(first_number: number, second_number: number): number {
    return first_number * second_number;
}

console.log(multipy(first_number, second_number));

//Arrow functions
let first_name = "Hope";
let last_name = "Sain";

let full_name = (first_name: string, last_name: string): string => {
    return first_name + " " + last_name;
} 

console.log(full_name(first_name, last_name));

//Optional Parameters
function optional_subtraction(first_number: number, second_number?: number): number {
    return first_number - (second_number || 0);
}

console.log(optional_subtraction(15, 2));

//Default Parameters
function default_division(first_number: number, second_number: number = 1): number {
    if (second_number == 0) {
        return 0;
    }
    return first_number / second_number;
}

console.log(default_division(30, 2));