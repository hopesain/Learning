let firstPattern = /hello/
let secondPattern = /world/

let str = "hello world"

// Test Method
console.log("Test Method")
let firstResult = firstPattern.test(str)

// Exe Method
console.log("Exe Method")
let secondResult = secondPattern.exec(str)

console.log(firstResult)
console.log(secondResult)

// Match Method
console.log("Match Method")
let matchString = "The quick brown fox jumps over the lazy dog."

let matchPattern = /the/gi

let matches = matchString.match(matchPattern)

console.log(matches)

// MatchAll Method
console.log("Match All Method")
let matchAllString = "Hello world! this is a test string"

let matchAllRegex = /[a-zA-Z]+/gi

let matchesAll = matchAllString.matchAll(matchAllRegex)

for (let match of matchesAll) {
    console.log(match)
}

// Search Method
console.log("Search Method")

let searchString = "The quick brown fox jumps over the lazy brown dog"
let searchPattern = /hope/

let result = searchString.search(searchPattern)
console.log(result)

// Replace Method
console.log("Replace Method")

let replaceString = "Hello, world"
let newReplaceString = replaceString.replace(/o/g, "0")

console.log(newReplaceString)

// Replace All Method
console.log("Replace All Method")

let replaceAllString = "mangoes, bananas, mangoes, orange"
let newReplaceAllString = replaceAllString.replaceAll("mangoes", "lemons")

console.log(newReplaceAllString)

// Split Method
console.log("Split Method")

let splitString = "food,nyaudings,dances"
let newSplitArray = splitString.split(/,/)

console.log(newSplitArray)

// Anchors 
console.log("Anchors in Regex")

// ^ anchor matches the character at the beginning of the text (string).
let upperString = "Mountain"

console.log(/^S/.test(upperString)) // false, the first character of mountain is not M.
console.log(/^M/.test(upperString)) // true.

// $ anchor matches the character at the end of the text (string).
let dollarString = "Ocean"

console.log(/N$/i.test(dollarString)) // True, last character of ocean is N.