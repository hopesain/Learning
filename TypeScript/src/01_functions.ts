function check_availability(income: number): boolean {
    if (income < 10_000) {
        return true;
    }
    return false
}

let income: number = 100_000;

console.log(check_availability(income))