const ApiError = require('../error/ApiError');
const { Tracker } = require('../models/models')

class TrackerController
{
  async getAll(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)

    // image name tracker
    return res.json({ token })
  }

  async getDetails(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async create(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async update(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async destroy(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

}

module.exports = new UserController()