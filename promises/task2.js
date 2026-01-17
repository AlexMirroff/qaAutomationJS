
function getTodoById(id) {
    return fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(response => response.json())
        .catch(error => console.log("Failed to get todo"))
}

function getUserById(id) {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .catch(error => console.log("Failed to get user"))
}

let promiseRaceTodoOrUser = Promise.race([getTodoById(1), getUserById(1)])
    .then(obj => console.log(obj))

let promiseAllTodoAndUser = Promise.all([getTodoById(1), getUserById(1)])
    .then(obj => console.log(obj))
