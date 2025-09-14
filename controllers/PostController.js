const BaseController = require("./BaseController");

class PostController extends BaseController {

    async getAllPosts() {
        return await this.client.get("/posts")
    }

    async addNewPost(body) {
        return await this.client.post("/posts", body)
    }

    async updatePost(postId, body) {
        return await this.client.put("/posts/" + postId, body)
    }

    async deletePost(postId) {
        return await this.client.delete("/posts/" + postId)
    }

    async getPostsByUserId(userId) {
        return await this.client.get("/posts?userId=" + userId)
    }
}

module.exports = new PostController