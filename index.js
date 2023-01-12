const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const categoryAdd = require("./routes/categoryAdd");
const pftData = require("./routes/pftData")

dotenv.config();
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.URL).then(()=>{
    console.log("database connected");
}).catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());

// routes fro the add transaction and category and type
 
app.use("/api/transaction",pftData);
app.use("/api/category",categoryAdd)

app.listen(PORT,() => {
    console.log("Backend server is running!");
  });