const axios = require('axios')
const PhotosController = require('../controllers/PhotosController')
const PostController = require('../controllers/PostController')
const UserController = require('../controllers/UserController')


describe('jsonplaceholder tests', () => {

    const BASE_URL = "https://jsonplaceholder.typicode.com"

    test('Get all photos', async () => {
        let response = await PhotosController.getAllPhotos()
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
        let response = await PostController.getAllPosts()
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

        let userId = Math.floor(Math.random() * 8) + 1

        let body = {
            "userId": userId,
            "title": "Add post to userId=10",
            "body": "Some body text"
        }
        let response = await PostController.addNewPost(body)
        expect(response.status).toBe(201)

        let expectedBody = {
            "userId": userId,
            "title": "Add post to userId=10",
            "body": "Some body text",
            id: 101
        }

        expect(response.data).toEqual(expectedBody)
    })

    test('Update post', async () => {

        let postId = Math.floor(Math.random() * 90) + 1
        let userId = Math.floor(Math.random() * 8) + 1

        const body = {
            "id": postId,
            "userId": userId,
            "title": "Update post to userId=15",
            "body": "Some another body text"
        }

        let response = await PostController.updatePost(postId, body)
        expect(response.status).toBe(200)

        const expectedBody = {
            userId: userId,
            title: 'Update post to userId=15',
            body: 'Some another body text',
            id: postId
        }

        expect(response.data).toEqual(expectedBody)
    })

    test('Delete post', async () => {

        let postId = Math.floor(Math.random() * 90) + 1

        let response = await PostController.deletePost(postId)
        expect(response.status).toBe(200)
        expect(response.data).toEqual({})
    })

    test('Get user by Id', async () => {

        let userId = Math.floor(Math.random() * 8) + 1

        let response = await UserController.getUserById(userId)
        expect(response.status).toBe(200)

        expect(response.data.id).toBe(userId)
        expect(response.data).toHaveProperty("name")
        expect(response.data).toHaveProperty("username")
        expect(response.data).toHaveProperty("email")
        expect(response.data).toHaveProperty("address")
        expect(response.data).toHaveProperty("phone")
        expect(response.data).toHaveProperty("company")

    })

    test('Filter posts by userId', async () => {

        let userId = Math.floor(Math.random() * 8) + 1

        let response = await PostController.getPostsByUserId(userId)
        expect(response.status).toBe(200)

        response.data.forEach(post => {
            expect(post).toHaveProperty("userId", userId)
        });

        expect(response.data.length).toEqual(10)
    })
})
