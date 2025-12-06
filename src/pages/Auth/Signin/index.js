import React from 'react';
import { Text, Button, Flex, Box, Input, FormLabel, Heading } from '@chakra-ui/react';
import { Formik } from 'formik';


const Signin = () => {
    return (
            <Formik>
                <Flex justifyContent="center" textAlign="center" width="full" > 
                    <Box >
                        <Heading> Sign In</Heading>
                    </Box>
                    
                    <Box>
                        <form>
                            <FormLabel> Email:
                            <Input placeholder='Enter your email'/>
                            </FormLabel>
                            <FormLabel> Password:
                            <Input placeholder='Enter your password'/>
                            </FormLabel>
                            <Button mt="5px">Sign in</Button>
                        </form>
                    </Box>

                </Flex>
            </Formik>
    );
}

export default Signin;

