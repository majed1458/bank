
const express = require("express");
const router = express.Router();
const{registerUser,AddAccount}= require('../controllers/agent')

router.get('/allAccounts',registerUser);
router.put('/AjoutCompte/:userId',AddAccount);


module.exports = router;
