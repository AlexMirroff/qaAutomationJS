
let car1 = {
    brand: "Audi",
    model: "A4 Avant",
    year: 2017
}


let car2 = {
    brand: "Mercedes",
    model: "C-Class",
    owner: "old owner"
}

let car3 = { ...car1, ...car2 }

console.log(car3)
