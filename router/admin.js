// const express = require("express");
// const { signup, signin } = require("../controllers/admin");
// const {
//   registervalidation,
//   loginvalidation,
//   validations,
// } = require("../middlewere/user");
// const isAdmin = require("../middlewere/isAdmin");
// const router = express.Router();

// //sign up
// router.post("/signup", registervalidation(), validations, signup);
// //sign in
// router.post("/signin",loginvalidation(),validations,signin)
// //current admin
// router.get("/current", isAdmin, (req, res) => {
//   res.send(req.admin);
// });

// //exports
// module.exports = router;
