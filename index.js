console.clear();
// require express
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const AgentRoutes = require('./router/agent');
// instance app
const app = express();
// connect
connectDB();
//routing

//middlewere golobal
app.use(express.json());
//middlewere route
app.use("/api/user", require("./router/user"));
app.use("/api/compte",require("./router/compte"))
// app.use("/api/admin", require("./router/admin"));
app.use('/agent',AgentRoutes);

// port et var d'environnement
const PORT = process.env.PORT;
//create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
