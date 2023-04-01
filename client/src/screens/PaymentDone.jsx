import React from 'react'
import { Box, VStack, Text, Heading } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const PaymentDone = () => {

    const searchQuery = useSearchParams()[0];
    const orderReferenceNumber = searchQuery.get('reference');

    return (
        <Box>
            <VStack h='100vh' justifyContent={'center'}>
                <Heading>Order Successfull</Heading>
                <Text>Reference No. ${orderReferenceNumber}</Text>
            </VStack>
        </Box>
    )
}

export default PaymentDone