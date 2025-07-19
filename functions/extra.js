// TASK 1

let string1 = " AUDI "
let string2 = "A4"

function shortLongShort(string1, string2) {
    let stringLength1 = string1.length
    let stringLength2 = string2.length

    if (stringLength1 === stringLength2)
        throw new Error("String length are equal")
    else if (stringLength1 > stringLength2)
        return string2 + string1 + string2
    else if (stringLength1 < stringLength2)
        return string1 + string2 + string1
}

console.log(shortLongShort(string1, string2))


// TASK 2

function isEven(number) {
    return number % 2 === 0 ? true : false
}

console.log(isEven(8))
console.log(isEven(5))
console.log(isEven(-3))
console.log(isEven(-10))
console.log(isEven(8.28))


// TASK 3

let rentDays = 5
const PRICE_PER_DAY = 40

function calcCost(rentDays) {
    if (rentDays >= 7)
        return PRICE_PER_DAY * rentDays - 50
    else if (rentDays >= 3)
        return PRICE_PER_DAY * rentDays - 20
    else
        return PRICE_PER_DAY * rentDays
}

console.log(calcCost(2))
console.log(calcCost(4))
console.log(calcCost(7))

