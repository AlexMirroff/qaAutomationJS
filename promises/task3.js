
async function getTodoById(id) {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        if (!response.ok)
            throw new Error("Failed to get todo")
        return await response.json()
    } catch (error) {
        console.error("Failed to get todo")
    }
}

async function getUserById(id) {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
        if (!response.ok)
            throw new Error("Failed to get user")
        return await response.json()
    } catch (error) {
        console.error("Failed to get user")
    }
}

let promiseRaceTodoOrUser = Promise.race([getTodoById(1), getUserById(1)])
    .then(obj => console.log(obj))

let promiseAllTodoAndUser = Promise.all([getTodoById(1), getUserById(1)])
    .then(obj => console.log(obj))
