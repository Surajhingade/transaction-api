const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    category:String,
    categorytype:String
  }
 
   
);

module.exports = mongoose.model("Category", CategorySchema);