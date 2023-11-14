const ApiError = require('../error/ApiError');
const { Tracker } = require('../models/models')

class WeakTrackerController
{
  async getByDate(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)

    // weak timesheets, Purchase, Result
    return res.json({ token })
  }

  async getDetails(req, res, next)
  {

    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async createPlan(req, res, next)
  {
    // data info

    // success
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async update(req, res, next)
  {
    // data info

    // success
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