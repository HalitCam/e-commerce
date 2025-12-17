import React from 'react';
import { Alert, Stack, AlertIndicator, AlertTitle } from "@chakra-ui/react"

const Error404 = () => {
    return (
        <Stack gap="4" width="full">
            <Alert status="error">
                <AlertTitle>Error404! This page was not found!</AlertTitle>
            </Alert>
        </Stack>

    );
}

export default Error404;
