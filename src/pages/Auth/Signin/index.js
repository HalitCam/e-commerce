import React from 'react';
import { Text, Button, Flex, Box, Input, FormLabel } from '@chakra-ui/react';
import { Formik } from 'formik';


const Signin = () => {
    return (
        <div>
            <Formik>
                <Flex justifyContent="center" textAlign="center" > 
                    <Box >
                        <Text fontSize="55px"> Sign In</Text>
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

        </div>
    );
}

export default Signin;

