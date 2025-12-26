import React from 'react';
import {useParams} from 'react-router-dom';

import { fetchProduct } from '../../../api';
import {useQuery} from "react-query";

const ProductDetail = () => {
    const {product_id} = useParams();

    const {isError, isLoading,  data, error } = useQuery(["admin:product", product_id], fetchProduct(product_id));
 
    return (
        <div>
            ProductDetails
        </div>
    );
}

export default ProductDetail;
