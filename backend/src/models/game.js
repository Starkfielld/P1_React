import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
        },
        plataforma: {
            type: String,
            unique: true
        },
        ano: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
);

export default mongoose.model("game", gameSchema);