import React from 'react';
import { Text, Button, Flex, Box, Input, FormLabel, Heading, Alert } from '@chakra-ui/react';
import { useFormik } from 'formik';
import SigninValidation from './validation';
import { fetchLogin } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';

const Signin = () => {
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: SigninValidation,
        onSubmit: async (values, bag) => {
            try {
                const responseLogin = await fetchLogin({
                    email: values.email,
                    password: values.password
                })
                login(responseLogin)

            } catch (e) {
                console.log(e.message)
            }
        }
    })

    return (
        <Flex justifyContent="center" textAlign="center" >
            <Box>
                <Heading> Sign In</Heading>

                <form onSubmit={formik.handleSubmit}>
                    <FormLabel> Email:
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormLabel>

                    {formik.touched.email && formik.errors.email && (
                        <Alert status="error">{formik.errors.email}</Alert>
                    )}

                    <FormLabel> Password:
                        <Input
                            type='password'
                            placeholder='Enter your password'
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormLabel>

                    {formik.touched.password && formik.errors.password && (
                        <Alert status="error">{formik.errors.password}</Alert>
                    )}

                    <Button mt="5px" type='submit' isLoading={formik.isSubmitting}>Sign in</Button>
                </form>

            </Box>
        </Flex>
    );

}

export default Signin;

