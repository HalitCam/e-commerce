import React from 'react';
import { Text, Button, Flex, Box, Input, FormLabel, Heading, Alert } from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import SigninValidation from './validation';

const Signin = () => {
    const formik = useFormik({
    initialValues: {
        email:"",
        password:"",
    },
    SigninValidation,
    onSubmit: async (values, bag)=>{
        try{

        }catch(e){
            console.log(e)
        }

       
    }
    

})

    return (
        <Formik>
            <Flex justifyContent="center" textAlign="center" >
                <Box>
                    <Box >
                        <Heading> Sign In</Heading>
                    </Box>

                    <Box>
                        <form>
                            <FormLabel> Email:
                                <Input placeholder='Enter your email' />
                            </FormLabel>
                            <FormLabel> Password:
                                <Input placeholder='Enter your password' />
                            </FormLabel>
                            <Button mt="5px">Sign in</Button>
                        </form>
                    </Box>
                </Box>

            </Flex>
        </Formik>
    );

}

export default Signin;

