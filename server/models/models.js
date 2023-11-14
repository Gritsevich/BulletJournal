const sequelize = require('../db')
const {DataTypes} = require('sequelize') //импортируем типы полей

const User = sequelize.define('user', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email:{type: DataTypes.STRING, unique:true,},
  password:{type: DataTypes.STRING},
  isBlock:{type: DataTypes.BOOLEAN},
})

const Role = sequelize.define('role', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  role:{type: DataTypes.STRING, defaultValue: "USER", unique: true },
})

const Payment = sequelize.define('payment', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  number:{type: DataTypes.INTEGER, unique:true,},
  date:{type: DataTypes.TIME},
  name:{type: DataTypes.STRING},
})

const PaymentInfo = sequelize.define('paymentInfo', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  dayPayment:{type: DataTypes.TIME,},
  term:{type: DataTypes.INTEGER,},
  cost:{type: DataTypes.INTEGER},
  lastDay:{type: DataTypes.TIME,},
  isValid:{type: DataTypes.BOOLEAN},
})

const Tracker = sequelize.define('tracker', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.STRING,},
  info:{type: DataTypes.STRING},
  img:{type: DataTypes.STRING},
})

const TypeTracker = sequelize.define('typeTracker', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  type:{type: DataTypes.STRING, unique:true,},
})

const ActivityTracker = sequelize.define('activityTracker', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  data:{type: DataTypes.TIME,},
})

const NameActivity = sequelize.define('nameActivity', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.STRING, unique:true,},
})

const BoxesActivity = sequelize.define('boxesActivity', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  data:{type: DataTypes.TIME,},
})

const WeekTracker = sequelize.define('weekTracker', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  data:{type: DataTypes.TIME,},
})

const Plan = sequelize.define('plan', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.STRING,},
  data:{type: DataTypes.TIME},
  isDone:{type: DataTypes.BOOLEAN},
})

const Purchase = sequelize.define('purchase', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.STRING,},
  isDone:{type: DataTypes.BOOLEAN},
})

const Result = sequelize.define('result', 
{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.STRING,},
})

User.hasMany(Payment)
Payment.belongsTo(User)

User.hasMany(PaymentInfo)
PaymentInfo.belongsTo(User)

Role.hasMany(User)

Tracker.hasOne(TypeTracker)

WeekTracker.hasMany(User)

WeekTracker.hasMany(Purchase)
Purchase.belongsTo(WeekTracker)

WeekTracker.hasMany(Result)
Result.belongsTo(WeekTracker)

WeekTracker.hasMany(Plan)
Plan.belongsTo(WeekTracker)

ActivityTracker.hasMany(User)

ActivityTracker.hasMany(NameActivity)
NameActivity.belongsTo(ActivityTracker)

ActivityTracker.hasMany(BoxesActivity)
BoxesActivity.belongsTo(ActivityTracker)

module.exports =
{
  User,
  Payment,
  PaymentInfo,
  Plan,
  Role,
  Tracker,
  TypeTracker,
  ActivityTracker,
  NameActivity,
  BoxesActivity,
  Purchase,
  Result,
  WeekTracker
}