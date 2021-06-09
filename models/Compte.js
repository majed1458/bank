//mongoose
const mongoose = require ("mongoose")


//schema
const {Schema,model}=mongoose

//creation schema
const CompteSchema= new Schema ({
firstName:{type :String , required : true},
lastName : { type : String , required : true },
email: { type: String, required: true },
position : {type: String, required: true},
CIN :{type : Number, required : true},
adresse : {type : String},
phone : {type :Number ,required : true},
civilité :{type :String ,required : true},
naissance :{type : String,required : true},
ville : {type : String},
nature: {type : String, required : true},
soldeinitial : {type : String , required : true},
RIB : {type :Number, required: true}})



// export to the data base model
module.exports=Compte=model("compte",CompteSchema)