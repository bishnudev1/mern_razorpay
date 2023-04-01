import express from "express";
import { config } from "dotenv";
import paymentRouter from "./routes/paymentRoutes.js";
import cors from 'cors';

config({ path: './config/config.env' });

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from backend :)');
});

app.use("/api", paymentRouter);

app.get("/api/get-key", (req, res) => {
    res.status(201).json({
        key: process.env.RAZORPAY_KEY_ID
    });
});