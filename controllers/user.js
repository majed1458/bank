const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    //req.body => newUser
    // const { firstName, lastName, email, position, gender, CIN, phone, adresse } =
    //   req.body;
    console.log(req.body);
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
     return res.status(400).send({ errors: [{ msg: "Email should be unique" }] });
      
    }
    console.log(foundUser+"hani hne");
    // hash the password
    const newUser = await User.create({ ...req.body });


    return res.status(200).send({ msg: "signup sucess", user: newUser});
    // envoi mail
  } catch (error) {
    console.log(error)
    return res.status(400).send({
      errors: [{ msg: "can not save the user" }],
    });
  }
};
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the email exist
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);

    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).send({ msg: "login success", user: foundUser, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ errors: [{ msg: "can not login" }] });
  }
};
