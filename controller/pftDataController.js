const { model } = require("mongoose");
const pftCollection = require("../models/pftModalData");

// get All Transaction
const transaction_all = async (req,res)=>{

        try {
            const transaction = await pftCollection.find();
            res.json(transaction);
        } catch (error) {
            res.json({ message:error })
        }
}

// add new transaction

const transaction_add = async (req,res)=>{
        const transaction = new pftCollection({
            category:req.body.category,
            categorytype:req.body.categorytype,
            description:req.body.description,
            amount:req.body.amount,
            date:req.body.date
        });

        try {
            const saveProduct = await transaction.save();
            res.status(200).json(saveProduct);
        } catch (error) {
            res.status(400).json({message:error})
        }
}


module.exports = {transaction_add,transaction_all}


