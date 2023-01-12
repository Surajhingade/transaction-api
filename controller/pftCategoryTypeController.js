const { model } = require("mongoose");
const pftCategoryCollection = require("../models/categoryAdd");



// get All Categorytype
const categorytype_all = async (req,res)=>{

    try {
        const categorytype = await pftCategoryCollection.find();
        res.json(categorytype);
    } catch (error) {
        res.json({ message:error })
    }
}

// add new transaction

const categorytype_add = async (req,res)=>{
    const transaction = new pftCategoryCollection({
        category:req.body.category,
        categorytype:req.body.categorytype 
    });

    try {
        const saveProduct = await transaction.save();
        res.status(200).json(saveProduct);
    } catch (error) {
        res.status(400).json({message:error})
    }
}


module.exports = {categorytype_all, categorytype_add}

 
 