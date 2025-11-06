import React from 'react';
import {useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';


const ProductDetail = () => {
    const {product_id} = useParams();
    const {isLoading , isError , data} = useQuery(["product", product_id], ()=>{
        fetchProduct(product_id)
    })
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>
   console.log(data)

    return (
        
        <div>
            Product Detail {product_id}
        </div>
    );
}

export default ProductDetail;
