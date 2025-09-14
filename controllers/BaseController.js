const axios = require('axios')

class BaseController {


    constructor() {
        this.client = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' },
            validateStatus: () => true
        });
    }
}

module.exports = BaseController