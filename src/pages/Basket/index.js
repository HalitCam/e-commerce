import React from 'react';
import { useBasket } from '../../contexts/BasketContext';
import { Alert, Image, Button, Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Basket = () => {
    const { items } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0) // reduce function dizinlerde toplama yapmamizi saglar !

    return (
        <div>
            {items.length < 1 && (
                <Alert status='warning'>You have not any items in your basket !</Alert>
            )}

            {
                items.length > 0 && <>
                    <ul>
                        {
                            items.map((item) => (
                                <li key={item._id} mb="10">
                                    <Link to={`/product/${item._id}`}>
                                        {item.title} - {item.price} Euro
                                        <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                                    </Link>
                                    <Button mt="2" size="sm" colorScheme='pink' onClick={() => { }}>Remove from basket</Button>
                                </li>
                            ))
                        }
                    </ul>
                    <Box mt="10" >
                        <Text fontSize="22" >Total: {total} Euro </Text>
                    </Box>
                </>}

        </div>
    );
}

export default Basket;
