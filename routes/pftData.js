const { transaction_all, transaction_add } = require('../controller/pftDataController');

const router = require('express').Router();


router.get("/",transaction_all);
router.post("/",transaction_add);


module.exports = router