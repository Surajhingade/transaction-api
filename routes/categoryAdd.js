const { categorytype_all, categorytype_add } = require('../controller/pftCategoryTypeController');

const router = require('express').Router();


router.get("/",categorytype_all);
router.post("/",categorytype_add);


module.exports = router