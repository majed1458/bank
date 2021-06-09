// const Admin = require("../models/Admin");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// exports.signup = async (req, res) => {
//   try {
//     //req.body => newAgent
//     const { firstname,lastname, email, password, phone,CIN } = req.body;
//     const foundAdmin = await Admin.findOne({ email });
//     if (foundAdmin) {
//       res.status(400).send({ errors: [{ msg: "Email should be unique" }] });
//       return;
//     }
//     // const newAdmin
//     const newAdmin = new Admin({
//       firstname,
//       lastname,
//       email,
//       password,
//       phone,
//       CIN,
//     });
//     const saltRounds = 10;
//     const hashedpasssword = await bcrypt.hashSync(password, saltRounds);

//     newAdmin.password = hashedpasssword;
//     //save
//     await newAdmin.save();
//     //creation token
//     const token = jwt.sign(
//       {
//         id: newAdmin._id,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: "1h" }
//     );
//     res.status(200).send({ msg: "signup sucess", Admin: newAdmin, token });
//   } catch (error) {
//     res.status(400).send({
//       errors: [{ msg: "can not save the Agent" }],
//     });
//   }
// };
// exports.signin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     // check if the email exist
//     const foundAdmin = await Admin.findOne({ email });

//     if (!foundAdmin) {
//       return res.status(400).send({ errors: [{ msg: "bad credential" }] });
//     }
//     const checkPassword = await bcrypt.compare(password, foundAdmin.password);
//     if (!checkPassword) {
//       return res.status(400).send({ errors: [{ msg: "bad credential" }] });
//     }
//     const token = jwt.sign(
//       {
//         id: foundAdmin._id,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: "1h" }
//     );
//     res.status(200).send({ msg: "login success", Admin: foundAdmin, token });
//   } catch (error) {
//     return res.status(400).send({ errors: [{ msg: "can not login" }] });
//   }
// };
