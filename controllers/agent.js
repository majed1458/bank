const User = require ("../models/User")
const bcrypt = require("bcrypt");
exports.registerUser= async (req,res) => {
try { 

 const allUser =await 
User.find().populate("compte").then(data =>{
cosole.log(data);

})}
catch (error){
res.status(400).send({errors: [{msg: 'Errors'}]})
}

}

// const saltRounds = 10;
//     const hashedpassword =  await bcrypt.hash(password, saltRounds)
    
//     newUser.password = hashedpassword;
//      await newUser.save();
//     console.log(newUser);

  