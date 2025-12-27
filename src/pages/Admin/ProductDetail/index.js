import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from "@chakra-ui/react";

import { fetchProduct } from '../../../api';
import { useQuery } from "react-query";
import { Formik } from "formik";

const ProductDetail = () => {
    const { product_id } = useParams();

    const { isError, isLoading, data, error } = useQuery(["admin:product", product_id], () => fetchProduct(product_id));

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error {error.message}</div>
    }
    const handleSubmit = () =>{
        console.log("submitted")
    }

    return (
        <div>
            <Text fontSize="2xl"> Edit </Text>
            <Formik
                initialValues={{
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    photos: data.photos,
                }}
                //    validationSchema={}
                onSubmit={handleSubmit}
            >

            </Formik>
        </div>
    );
}

export default ProductDetail;
