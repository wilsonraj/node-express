import mongoose from "mongoose";
const mongodb=async()=>{
    try{
      await (process.env.MONGO_DB)
       console.log("mongo connected")

    }
    catch(error){
    console.log(error.message)
    process.exit(1)
    }
}
export default  mongodb