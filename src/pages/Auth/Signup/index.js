// formik and yup was installed
import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { useFormik } from 'formik';
import validationSchema from './validations'
import { fetchRegister } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext'


const Signup = () => {
    const { login } = useAuth();
  
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const registerResponse = await fetchRegister({
                    email: values.email,
                    password: values.password,
                    passwordConfirm : values.passwordConfirm

                });
                login(registerResponse)
                
                
                
            } catch (e) {
                bag.setErrors({ general: e.response.data.message });
            }
            
        }

    })

    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
                <Box pt={10}>
                    <Box textAlign="center" >
                        <Heading>Sign Up</Heading>
                    </Box>
                    <form onSubmit={formik.handleSubmit}>

                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                name='email'
                                autoComplete='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                        </FormControl>

                        <FormControl mt="4">
                            <FormLabel>Password</FormLabel>
                            <Input
                                name='password'
                                autoComplete='new-password'
                                type='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                        </FormControl>

                        <FormControl mt="4">
                            <FormLabel>Password Confirm</FormLabel>
                            <Input
                                name='passwordConfirm'
                                autoComplete='new-password'
                                type='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordConfirm} />
                        </FormControl>
                        <Button mt={4} w="100%" type='submit' >Sign Up</Button>
                    </form>
                </Box>
            </Flex>


        </div >
    );
}


export default Signup;
