import mongoose from "mongoose";

async function dbConnect (){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected🎉");
    }catch(error){
        console.log("Failed to connect to DB", error.message);
    }
}

export default dbConnect