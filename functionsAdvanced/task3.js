
function divide(numerator, denominator) {

    if (denominator === 0)
        throw new Error("Provided denominator is zero")

    if (typeof numerator != "number" || typeof denominator != "number")
        throw new Error("Not a number provided")

    return numerator / denominator
}


try {
    console.log(divide(5, 2))
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Робота завершена")
}

try {
    console.log(divide(10, 0))
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Робота завершена")
}

try {
    console.log(divide(true, 8))
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Робота завершена")
}