const scores = new Map([
    ["Hope", 63],
    ["Terry", 82],
])

scores.set("Trevor", 95)
scores.set("Faith", 52)
scores.set("Zikani", 10)

console.log(scores)

console.log(scores.get("Faith"))

scores.delete("Zikani")

console.log(scores)