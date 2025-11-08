import React from 'react';
import {useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import { Button, Box, Image } from '@chakra-ui/react';


const ProductDetail = () => {
    const {product_id} = useParams();
    const {isLoading , isError , data} = useQuery(["product", product_id], ()=>{
       return  fetchProduct(product_id)
    })
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>
   console.log(data)

    return (
        
        <div>
            <Button colorScheme="blue">Add to Basket</Button>
        </div>
    );
}

export default ProductDetail;
