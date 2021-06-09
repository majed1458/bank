// mongoose
const mongoose = require("mongoose");
//schema
const { Schema, model } = mongoose;
//creation schema
const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },

  position: { type: String, required: true },
  gender: { type: String, required: true },
  CIN: { type: Number, required: true },
  password: { type: String, required: true },
  phone :Number,
  adresse : { type: String},
  compte: [ { type: mongoose.Schema.Types.ObjectId, 
    ref :'Compte',}],
  role: {
    type: String,
    enum: ["user", "admin", "agent"],
    default: "user",
    required: true,
  },
});
//export to the DB model
module.exports = User = model("user", UserSchema);
