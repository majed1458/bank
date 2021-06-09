const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin")
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }

    var decoded = jwt.verify(token, process.env.SECRET_KEY); //{id}
    const foundAdmin = await Admin.findOne({ _id: decoded.id });
    if (!foundAdmin) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    req.admin = foundAdmin;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
};
module.exports = isAdmin;
