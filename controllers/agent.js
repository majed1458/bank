const Compte = require("../models/Compte");
const User = require("../models/User")
const bcrypt = require("bcrypt");
exports.registerUser = async (req, res) => {
    try {
// hne cherchina el users lkol w ba3ed populatina les comptes bech najmou n'accediw lel users lkol bel les comptes mte3hom xD

        const allUser = await User.find({compte : []}).populate("compte").then(data => {
            // hen ba3ed ma l9ina el users 
                console.log(data);
              return res.status(200).send({data : data })

            });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ errors: [{ msg: 'Errors' }] })
    }

}

exports.AddAccount= async(req,res)=>{
    try{
    const user= await User.findOne({_id:req.params.userId});
    if(!user){
        return res.status(400).json({msg:"utilisateur n existe pas"})
    }
    const newCompte = await Compte.create({...req.body});
 
    const saltRounds = 10;
        const hashedpassword =  await bcrypt.hash(  req.body.password, saltRounds)
    //naba3thou el mail
        user.password = hashedpassword;
        user.compte.push(newCompte); 
         await user.save();
        console.log(user);
        return res.status(200).json({msg:"compte created successfully" , data : user});

    } catch(err){
        console.log(err);
        return res.status(400).json({msg:"famma 7keya saret"});
    }

}


