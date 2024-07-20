import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://BlogData:Maliksab@cluster0.8646zrl.mongodb.net/blog-app')
    console.log("DB Connected")
}