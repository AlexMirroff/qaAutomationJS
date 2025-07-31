
const initialArray = [2, -5, 0, 7, -3, 0, 10, -8]

let newArray = initialArray.filter(function (num) {
    if (num % 2 === 0)
        return num
})

console.log(newArray)

