const Plant=require("../models/plants")

const getAllPlants=async (req,res) =>{
    const plant=await Plant.find(req.query);
    res.status(200).json({plant});
}

const getAllProducts=async(req,res)=>{
    res.status(200).json({msg:"I am ALL Products"});
}

module.exports={getAllPlants,getAllProducts};