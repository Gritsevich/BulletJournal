const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

var loginReg = new RegExp('[A-Za-z0-9]+')
var engPassReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W])[A-Za-z\\d\\W]{8,}$", 'g')

const generateJwt = (id, login) =>
{
  return jwt.sign(
    {id, login},
    process.env.SECRET_KEY,
    {expiresIn: '24h'})
}

class UserController
{

  async registration(req, res, next)
  {
    const {login, password} = req.body
    if( !login || typeof(login) !== 'string' || !loginReg.test(login)){
        return next(ApiError.badRequest('Некорректно введен логин'))
    }
    if( !password || typeof(password) !== 'string' || !engPassReg.test(password)){
        return next(ApiError.badRequest('Некорректно введен пароль'))
    }

    const candidate = await User.findOne({where:{login}})
    if(candidate) 
    {
        return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ login, password: hashPassword})
    const token = generateJwt(user.id, user.login)

    return res.json({ token })
  }

  async login(req, res, next)
  {
    const { login, password } = req.body
    let user = await User.findOne({where:{ login }})
    if(!user)
    {
      return next(ApiError.internal('Неверно указан Логин и/или пароль'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if(!comparePassword)
    {
      return next(ApiError.internal('Неверно указан Логин и/или пароль'))
    }
    const token = generateJwt(user.id, user.login)

    return res.json({ token })
  }

  async check(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async addPayment(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }

  async pay(req, res, next)
  {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }
}

module.exports = new UserController()