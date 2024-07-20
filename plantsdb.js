const connectDB=require("./mongo/connect");
const Plant = require("./models/plants");
require("dotenv").config();

const PlantJson=require("./plants.json");

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Plant.deleteMany();
        await Plant.create(PlantJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}

start();