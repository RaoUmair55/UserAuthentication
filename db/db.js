import e from "express";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to MongoDB", mongoose.connection.host, mongoose.connection.name)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDB