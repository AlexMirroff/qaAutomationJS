const axios = require('axios')

describe('jsonplaceholder tests', () => {

    const BASE_URL = "https://jsonplaceholder.typicode.com"

    test('Get all photos', async () => {
        let response = await axios.get(BASE_URL + "/photos")
        expect(response.status).toBe(200)
        expect(response.data.length).toBe(5000)

        response.data.forEach(photo => {

            expect(photo).toHaveProperty("albumId")
            expect(photo).toHaveProperty("id")
            expect(photo).toHaveProperty("url")
            expect(photo).toHaveProperty("thumbnailUrl")
        });

    })

    test('Get all posts', async () => {
        let response = await axios.get(BASE_URL + "/posts")
        expect(response.status).toBe(200)
        expect(response.data.length).toBe(100)

        response.data.forEach(post => {

            expect(post).toHaveProperty("userId")
            expect(post).toHaveProperty("id")
            expect(post).toHaveProperty("title")
            expect(post).toHaveProperty("body")
        });

    })

    test('Add post', async () => {

        let body = {
            "userId": 10,
            "title": "Add post to userId=10",
            "body": "Some body text"
        }
        let response = await axios.post(BASE_URL + "/posts", body)
        expect(response.status).toBe(201)

        let expectedBody = {
            userId: 10,
            title: 'Add post to userId=10',
            body: 'Some body text',
            id: 101
        }

        expect(response.data).toEqual(expectedBody)
    })

    test('Update post', async () => {

        let body = {
            "id": 10,
            "userId": 15,
            "title": "Update post to userId=15",
            "body": "Some another body text"
        }
        let response = await axios.put(BASE_URL + "/posts/10", body)
        expect(response.status).toBe(200)

        let expectedBody = {
            userId: 15,
            title: 'Update post to userId=15',
            body: 'Some another body text',
            id: 10
        }

        expect(response.data).toEqual(expectedBody)
    })

    test('Delete post', async () => {

        let response = await axios.delete(BASE_URL + "/posts/10")
        expect(response.status).toBe(200)
        expect(response.data).toEqual({})
    })

    test('Get user by Id', async () => {

        let response = await axios.get(BASE_URL + "/users/1")
        expect(response.status).toBe(200)

        let expectedBody = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }

        expect(response.data).toEqual(expectedBody)
    })

    test('Filter posts by userId', async () => {

        let response = await axios.get(BASE_URL + "/posts?userId=7")
        expect(response.status).toBe(200)

        response.data.forEach(post => {
            expect(post).toHaveProperty("userId", 7)
        });

        expect(response.data.length).toEqual(10)
    })
})
