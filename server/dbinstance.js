const { Role } = require('./models/models')

const createRole = async (type) => {
    try{
  await Role.create({
        role: type
    })
    }catch(e){}
}

const createRoles = async () =>{
  createRole("USER")
  createRole("ADMIN")
}



module.exports = function(){
    createRoles()
}