const names = new Set()

names.add("Hope")
names.add("Innocent")
names.add("Trevor")
names.add("Hope")

console.log(names)

for (_name of names) {
    console.log(_name)
}

exists = names.has("Hope")
console.log(exists)

const students = new Set()

students.add("Hope")
students.add("Mike")
students.add("Wonderful")
students.add("Trevor")