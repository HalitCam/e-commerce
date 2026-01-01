import React from 'react';
import { useFormik } from "formik";
import { Box, Text, FormControl, FormLabel, Input, Textarea, Button} from "@chakra-ui/react";
import validationNew from './validation';


const NewProduct = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            photos: [],
        },
        validationSchema:validationNew,
        onSubmit: (values) => (console.log(values))
    });

    return (
        <div>
            <Text fontSize="3xl" > New Product</Text>
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl mt="5">
                        <FormLabel>Title</FormLabel>
                        <Input name='title' width="8xl" disabled={formik.isSubmitting} value={formik.values.title} onChange={formik.handleChange} isInvalid={formik.touched && formik.errors.title} onBlur={formik.handleBlur}/>
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Description</FormLabel>
                        <Textarea name='description' width="8xl" onChange={formik.handleChange}></Textarea>
                    </FormControl>
                    <FormControl mt="5">
                        <FormLabel>Price</FormLabel>
                        <Input type='number' width="8xl" onChange={formik.handleChange} />
                    </FormControl>
                    <Button type="submit" onClick={formik.handleSubmit}>Add a new product</Button>
                </form>

            </Box>
        </div>
    );
}

export default NewProduct;
