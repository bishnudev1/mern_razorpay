import React from 'react'
import { Button, VStack, Image, Text } from '@chakra-ui/react';

const Card = ({ amount, image, onClick }) => {
    return (
        <VStack>
            <Image boxSizing={'64'} objectFit={'cover'} src={image} alt='shopping-images' />
            <Text>${amount}</Text>
            <Button onClick={() => onClick(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card