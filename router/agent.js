
const bcrypt = require("bcrypt");

const saltRounds = 10;
    const hashedpassword =  await bcrypt.hash(password, saltRounds)
    





module.exports = router;
