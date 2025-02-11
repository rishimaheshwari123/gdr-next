const express = require("express")
const { createProductCtrl, getAllProductCtrl, deleteProductCtrl } = require("../controllers/productCtrl")
const router = express.Router()


router.post("/create", createProductCtrl)
router.get("/getAll", getAllProductCtrl)
router.delete("/delete/:id", deleteProductCtrl)



module.exports = router


