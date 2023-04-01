import crypto from 'crypto';
import { razorInstance } from '../server.js';
import { Payment } from '../models/paymentModel.js';

export const placeOrder = async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 80 * 100),  // amount in the smallest currency unit
        currency: "INR",
    };
    const order = await razorInstance.orders.create(options);
    res.status(201).json({
        success: true,
        order: order
    });
}

export const getUserData = async (req, res) => {
    res.send('Hello, I am a new user !');
}

export const verifyPayment = async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        await Payment.create({ razorpay_order_id, razorpay_payment_id, razorpay_signature });
        res.redirect(`http://localhost:3000/Payment-Successful?reference=${razorpay_payment_id}`);
    }
    else {
        res.status(201).json({
            success: false,
            message: 'Some error occured! Try again...'
        });
    }


}