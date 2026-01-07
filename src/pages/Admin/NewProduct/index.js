import React from 'react';
import { FieldArray, useFormik } from "formik";
import { Box, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import validationNew from './validation';
import { postProduct } from '../../../api';
import { useMutation, useQueryClient } from 'react-query';
import { message } from "antd";


const NewProduct = () => {
    const queryClient = useQueryClient();
    const newProductMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries("admin:products"),
    })

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            photos: [""],
        },
        validationSchema: validationNew,
        onSubmit: async (values, bag) => {
            console.log(formik.values);
            message.loading({ content: "Loading...", key: "product_new" });
            newProductMutation.mutate(values, {
                onSuccess: () => {
                    console.log("success");
                    message.success({
                        content: "The product successfully updated",
                        key: "product_new",
                        duration: 2,
                    })

                }
            })
        }
    })
    // const lastValues = {...formik.values, "photos":`${df}`}}


    return (
        <div>
            <Text fontSize="3xl" > New Product</Text>
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl mt="5">
                        <FormLabel>Title</FormLabel>
                        <Input name='title' width="8xl" disabled={formik.isSubmitting} value={formik.values.title} onChange={formik.handleChange} isInvalid={formik.touched.title && formik.errors.title} onBlur={formik.handleBlur} />
                        {formik.touched.title && formik.errors.title && <Text color="red.400">{formik.errors.title}</Text>}
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Description</FormLabel>
                        <Textarea name='description' disabled={formik.isSubmitting} value={formik.values.description} width="8xl" onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.description && formik.errors.description}></Textarea>
                        {formik.touched.description && formik.errors.description && <Text color="red.400">{formik.errors.description}</Text>}
                    </FormControl>
                    <FormControl my="5">
                        <FormLabel>Price</FormLabel>
                        <Input name='price' disabled={formik.isSubmitting} type='string' width="8xl" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.price && formik.errors.price} />
                        {formik.touched.price && formik.errors.price && <Text color="red.400">{formik.errors.price}</Text>}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Photos</FormLabel>
                        <Box >

                            {
                                formik.values.photos.map((photo, index) => (
                                    <div>
                                        {
                                            <div key={index}>
                                                <Input name={`photos.${index}`} value={photo} onChange={(e) => {
                                                    const newPhotos = [...formik.values.photos];
                                                    newPhotos[index] = e.target.value;
                                                    formik.setFieldValue("photos", newPhotos);
                                                }} />
                                                <Button
                                                    ml="2"
                                                    type="button"
                                                    colorScheme="red"
                                                    onClick={() => {
                                                        const newPhotos = formik.values.photos.filter(
                                                            (_, i) => i !== index
                                                        );
                                                        formik.setFieldValue("photos", newPhotos);
                                                    }}
                                                >
                                                    Remove
                                                </Button>
                                            </div>

                                        }
                                        <Button
                                            mt="3"
                                            type="button"
                                            onClick={() =>
                                                formik.setFieldValue("photos", [...formik.values.photos, ""])
                                            }
                                        >
                                            Add a photo
                                        </Button>

                                    </div>
                                ))

                            }

                            <Box style={{ display: "flex", justifyContent: "center" }}>
                                <Button type="button"  colorScheme='red' mr="5" onClick={formik.handleReset}>Reset</Button>
                                <Button type="submit">Save</Button>
                            </Box>
                        </Box >
                    </FormControl>


                </form>

            </Box>
        </div>
    );
}

export default NewProduct;
