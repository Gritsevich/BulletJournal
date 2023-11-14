require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
// const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorMiddleware')
const path = require('path')

const dbInstance = require('./dbinstance') //< удалить!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const PORT = process.env.PORT || 5000

const app = express()
app.use(require('morgan')('dev'))
app.use(cors())
app.use(express.json()) // для возможности использования json
app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Midddleware
app.use(errorHandler)

const start = async () => 
{
  try 
  {
    await sequelize.authenticate() //подключение к бд
    await sequelize.sync(/*{ alter: true }*/) // сверяет состояние бд со схемой
    dbInstance() //< удалить!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e)
  {
    console.log(e)  
  }
}

start() 