
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 0)
        zeroCount++
    else if (numbers[i] === Math.abs(numbers[i]))
        positiveCount++
    else if (-numbers[i] === Math.abs(numbers[i]))
        negativeCount++

}

console.log(`Кількість позитивних чисел: ${positiveCount}`)
console.log(`Кількість негативних чисел: ${negativeCount}`)
console.log(`Кількість нульових чисел: ${zeroCount}`)

