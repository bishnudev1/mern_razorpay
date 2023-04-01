import {app} from './app.js';
import Razorpay from 'razorpay';
import { connectDB } from './db/conn.js';

connectDB();

export const razorInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

app.listen(process.env.PORT, () => {
    console.log(`Server has started at http://localhost:${process.env.PORT}`);
});