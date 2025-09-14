const BaseController = require("./BaseController");

class PhotosController extends BaseController {

    async getAllPhotos() {
        return await this.client.get("/photos")
    }

}

module.exports = new PhotosController