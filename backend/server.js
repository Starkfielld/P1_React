import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

import { config } from 'dotenv';
const port = process.env.PORT

app.use(express.json());

import connectDB from './src/database/database.js';
connectDB();

import userRoutes from './src/routes/user.js';
app.use('/user', userRoutes);

import game from './src/routes/game.js';
app.use('/game', game);

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/user`);
})