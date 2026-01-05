import React from 'react';
import { FieldArray, useFormik } from "formik";
import { Box, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import validationNew from './validation';
import { postProduct } from '../../../api';
import { useMutation, useQueryClient } from 'react-query';
import{message} from "antd";


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
            photos: [],
        },
        validationSchema: validationNew,
        onSubmit: async (values, bag) =>{
            console.log(formik.values);
            message.loading({content : "Loading...", key: "product_new"});
            newProductMutation.mutate(values, {
                onSuccess: () =>{
                    console.log("success");
                    message.success({
                        content:"The product successfully updated",
                        key:"product_new",
                        duration:2,
                    })

                }
            })
        }
    })
    const values = {...values, "price":`${JSON.stringify(formik.values.price)}`}
    console.log(values)

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

                        <Button type="button" handleSubmit={() => (console.log("added"))}>Add a photo</Button>
                    </FormControl>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="reset" colorScheme='red' mr="5">Reset</Button>
                        <Button type="submit">Save</Button>
                    </Box>
                </form>

            </Box>
        </div>
    );
}

export default NewProduct;
