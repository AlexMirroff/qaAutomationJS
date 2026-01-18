
let users = [
    { name: "Steve", email: "steve@d.com", age: 30 },
    { name: "Anna", email: "anna@ex.com", age: 25 },
    { name: "Mark", email: "mark@do.org", age: 35 },
    { name: "Julia", email: "julia@mail.net", age: 28 }
]


for (const { name, email, age } of users) {
    console.log(`UserName: ${name}, email: ${email}, age: ${age}`)
}