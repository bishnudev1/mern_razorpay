import express from 'express';
import { placeOrder,verifyPayment } from '../controllers/paymentControllers.js';

const paymentRouter = express.Router();

paymentRouter.route('/place-order').post(placeOrder);
paymentRouter.route('/payment-verification').post(verifyPayment);

export default paymentRouter;



