let result = []
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("ApaBole")
    } else if (i % 5 === 0) {
        result.push("Bole")
    } else if (i % 3 === 0) {
        result.push("Apa")
    } else {
        result.push(i)
    }
}
console.log(result)


