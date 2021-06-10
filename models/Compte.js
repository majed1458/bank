//mongoose
const mongoose = require("mongoose")


//schema
const { Schema, model } = mongoose

//creation schema
const CompteSchema = new Schema({
    soldeinitial: { type: String, required: true },
    RIB: { type: Number, required: true }
});



// export to the data base model
module.exports = Compte = model("compte", CompteSchema)