import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();


export default async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.log("Error: ", e.message);
    }
}