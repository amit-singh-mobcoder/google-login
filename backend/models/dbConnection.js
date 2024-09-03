import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";
configDotenv();

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(DB_URL);
        console.log('mongodb connection sucessfull DB_HOST: ', connectionInstance.connection.host)
    } catch (error) {
        console.log('mongodb connection failed, Error ', error);
        process.exit(1);
    }
}

export default connectDB;
