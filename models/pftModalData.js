const mongoose = require('mongoose');

const pftModalSchema = new mongoose.Schema({
    category:String,
    categorytype:String,
    description:String,
    amount:String,
    date:String
})

module.exports = mongoose.model("PftData",pftModalSchema);

