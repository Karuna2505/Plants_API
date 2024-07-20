const express =require("express");
const app=express();
const connectDB=require("./mongo/connect")
const plants_routes=require("./routes/plants");
require("dotenv").config();

const PORT=process.env.PORT || 5000;
 
app.get("/",(req,res) => {
   res.send("Hi,I m Live");
})

//middleware
app.use("/api/plants",plants_routes)

const start = async() => {
    try{
       await connectDB(process.env.MONGODB_URL);
       app.listen(PORT,()=>{
         console.log(`${PORT} YES  i am connected`);
       })
    }catch(error){
      console.log(error);
    }
}

start();