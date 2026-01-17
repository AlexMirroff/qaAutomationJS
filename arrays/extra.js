//1
const array1 = [1, 10, 14, 2, 4, 5, 43, 34]

function avg(arg) {

    if (arg.length === 0)
        return 0

    return arg.reduce((acc, value) => acc + value, 0) / arg.length
}

console.log(avg(array1))

//2

const array2 = [3, -15, 0, 2, 4, 5, 43, 34]

function sumOf2LowestPositive(arg) {

    arg = arg.filter((num) => num > 0)

    if (arg.length < 4)
        throw new Error("Array contain less than 4 positive elems")

    arg = arg.sort((a, b) => a - b)
    // tried to use as much array funcs as possible
    arg = arg.reverse().slice(arg.length - 2)
    return arg.reduce((acc, value) => acc + value, 0)

}

console.log(sumOf2LowestPositive(array2))

//3

let array3 = [3, -15, 0, 2, 4, 5, 43, 34]

if (array3.length < 2)
    throw new Error("Array contain less than 2 elems")

array3 = array3.sort((a, b) => a - b)

let diff = array3[0] + array3.reverse()[0]


console.log(diff)
