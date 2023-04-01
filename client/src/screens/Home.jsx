import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import Card from './components/Card.jsx';
import Axios from 'axios';

const Home = () => {

    const placeOrder = async (amount) => {

        const { data: { key } } = await Axios.get('http://localhost:5000/api/get-key');

        const { data: { order } } = await Axios.post('http://localhost:5000/api/place-order', {
            amount
        });

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:5000/api/payment-verification",
            prefill: {
                name: "Bishnudev Khutia",
                email: "khutia.bishnudev@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();



    }

    return (
        <Box>
            <Stack h='100vh' justifyContent='center' alignContent='center' direction={["column", "row"]}>
                <Card amount={149} image={'https://rukminim1.flixcart.com/image/416/416/l2nmnww0/monitor/0/r/j/-original-imagdyc4ehaygvug.jpeg?q=70'} onClick={placeOrder} />
                <Card amount={649} image={'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/2/9/-original-imaggj68htbzzfhy.jpeg?q=70'} onClick={placeOrder} />
            </Stack>
        </Box>
    )
}

export default Home