import React from 'react';
import { Button, Flex, Box, Input, FormLabel, Heading, Alert, FormControl } from '@chakra-ui/react';
import { useFormik } from 'formik';
import SigninValidation from './validation';
import { fetchLogin } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: SigninValidation,
        onSubmit: async (values, bag) => {
            try {
                const loginResponse = await fetchLogin({
                    email: values.email,
                    password: values.password,
                    passwordConfirm: values.password
                })
                login(loginResponse);
                navigate("/profile");

            } catch (e) {
                bag.setErrors({ general: e.response.data.message });
            }
        }
    })

    return (
        <Flex justifyContent="center" textAlign="center" width="full">
            <Box>
                <Heading mb={7}> Sign In</Heading>

                <form onSubmit={formik.handleSubmit}>
                    <FormControl mb={4}>
                        <FormLabel htmlFor='email' > Email: </FormLabel>
                        <Input
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete='email'
                        />
                    </FormControl>

                    {formik.touched.email && formik.errors.email && (
                        <Alert status="error">{formik.errors.email}</Alert>
                    )}

                    <FormControl mb={4}>
                        <FormLabel htmlFor='password' > Password: </FormLabel>
                        <Input
                            id="password"
                            type='password'
                            placeholder='Enter your password'
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete='new-password'
                        />
                    </FormControl>

                    {formik.touched.password && formik.errors.password && (
                        <Alert status="error">{formik.errors.password}</Alert>
                    )}

                    <Button width="100%" mt="5px" type='submit' isLoading={formik.isSubmitting}>Sign in</Button>
                </form>

            </Box>
        </Flex>
    );

}

export default Signin;

