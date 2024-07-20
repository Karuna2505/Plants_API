const express =require("express");
const router=express.Router();
const {getAllPlants,getAllProducts}=require("../controllers/plants")

router.route("/").get(getAllPlants);
router.route("/testing").get(getAllProducts);

module.exports=router;