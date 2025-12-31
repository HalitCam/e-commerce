import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, FormControl, FormLabel, Input, Box, Button, Textarea } from "@chakra-ui/react";

import { fetchProduct, updateProduct } from '../../../api';
import { useQuery } from "react-query";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validation";
import { message } from "antd";

const ProductDetail = () => {
    const { product_id } = useParams();

    const { isError, isLoading, data, error } = useQuery(["admin:product", product_id], () => fetchProduct(product_id));

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error {error.message}</div>
    }
    const makeSubmit = async (values, bag) => {
        console.log("submitted");
        message.loading({content : "Loading..." , key: "product_update"});
       
        try{
            await updateProduct(product_id, values);
            message.success({
                content : "The product successfully updated",
                key: "product_update",
                duration: 2 ,
            });
        }catch(error){
            message.error("The product does not updated !")
        }

    }
    

    return (
        <div>
            <Text fontSize="2xl"> Edit </Text>

            <Formik
                initialValues={
                    {
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        photos: data.photos
                    }
                }
                validationSchema={validationSchema}
                onSubmit={makeSubmit}

            >
                {
                    ({ handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting }) => (
                        <Box my="5" textAlign="left">
                            <form onSubmit={handleSubmit} >
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid={touched.title && errors.title}
                                    />
                                    {errors.title && touched.title && <Text color='red.400'>{errors.title}</Text>}

                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>Description</FormLabel>
                                    <Textarea
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid={touched.description && errors.description}
                                    />
                                    {errors.description && touched.description && <Text color='red.400'>{errors.description}</Text>}

                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>Price</FormLabel>
                                    <Input
                                        type="number"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid={touched.price && errors.price}
                                    />
                                    {errors.price && touched.price && <Text color='red.400'>{errors.price}</Text>}
                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>Photos</FormLabel>
                                    <FieldArray
                                        name="photos"
                                        render={(arrayHelpers) => (
                                            <div>
                                                {
                                                    values.photos && values.photos.map((photo, index) => (
                                                        <div key={index}>
                                                            <Input
                                                                width="3xl"
                                                                name={`photos.${index}`}
                                                                value={photo}
                                                                disabled={isSubmitting}
                                                                onChange={handleChange}

                                                            />
                                                            <Button ml="4" type='button' color='red' onClick={() => arrayHelpers.remove(index)}>
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    ))
                                                }
                                                <Button mt="5" type='button' onClick={() => arrayHelpers.push("")}>Add a Photo</Button>
                                            </div>
                                        )}
                                    />
                                </FormControl>


                                <Button isLoading={isSubmitting} mt="10px" width="full" type='submit'>Update</Button>
                            </form>
                        </Box>
                    )
                }

            </Formik>


        </div>
    );
}

export default ProductDetail;
