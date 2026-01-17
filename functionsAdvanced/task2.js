
function recursion(num) {
    console.log(num)

    if (num > 0) {
        recursion(--num)
    }
}

recursion(8)