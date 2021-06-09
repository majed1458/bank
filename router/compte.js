// require express
const express = require("express");
// express router
const router = express.Router();

//require model compte
const Compte = require("../models/Compte");

// route compte [craction de compte et ]

router.post("/add", (req, res) => {
const {firstName,lastName,email,position,CIN,adresse,phone,civilité,naissance,ville,nature,soldeinitial,RIB}=req.body

   const newCompte = new Compte({
     firstName,
     lastName,
     email,
     position,
     CIN,
     adresse,
     phone,
     civilité,
     naissance,
     ville,
     nature,
     soldeinitial,
     RIB,
   })
newCompte.save()

res.status(200).send({msg:'compte added successfuly...',newCompte})

})


//export
module.exports = router;
