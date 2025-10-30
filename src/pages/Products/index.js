import React from 'react';
import Card from "../../components/Card"
import {Grid, GridItem} from "@chakra-ui/react"

const Products = () => {
    return (
            <Grid templateColumns='repeat(4, 1fr)' gap={3}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            
            </Grid>
    );
}

export default Products;
