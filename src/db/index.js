import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGO_DB Connection error-> ",error)
        process.exit(1)
    }
}

export default connectDB