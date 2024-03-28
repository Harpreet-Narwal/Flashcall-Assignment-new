import mongoose from "mongoose";

mongoose.connect("mongodb+srv://harpreetnarwal9:ghtthht9321@cluster0.f2hfypa.mongodb.net/Assignment-DB")
.then(() =>{
    console.log("connected to database");
})
.catch((e) =>{
    console.log('failed',e);
})

const newSchema = new mongoose.Schema({
   color: {
    type: String,
    required: true
   }
})

export const collection = mongoose.model("collection", newSchema);
