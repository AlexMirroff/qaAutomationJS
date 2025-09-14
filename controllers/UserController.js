const BaseController = require('./BaseController')

class UserController extends BaseController {
	async getUserById(userId) {
		return await this.client.get('/users/' + userId)
	}
}

module.exports = new UserController()
