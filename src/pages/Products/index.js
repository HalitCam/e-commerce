import React from 'react';
import Card from "../../components/Card"
import {Grid, GridItem} from "@chakra-ui/react"
import {useQuery } from 'react-query'
import {fetchProductList} from "../../api.js"


const Products = () => {
    const { isLoading, error, data } = useQuery('repoData', fetchProductList
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  if(data) console.log("data:", data)

    return (
            <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            {
                data.map((item,key) => <Card key={key} item={item}/>)
            }
            </Grid>
    );
}

export default Products;
