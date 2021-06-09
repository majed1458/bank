const jwt = require("jsonwebtoken");
const Agent = require("../models/Agent");

const isAgent = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }

    var decoded = jwt.verify(token, process.env.SECRET_KEY); //{id}
    const foundAgent = await Agent.findOne({ _id: decoded.id });
    if (!foundAgent) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    req.agent = foundAgent;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
};
module.exports = isAgent;
