import React from 'react';
import {useQuery} from "react-query";
import { fetchProductList } from '../../../api';

import {Text} from "@chakra-ui/react";
import { Table } from "antd"; // This UI Ant Design is besser at Table production than chakra-ui

const Products = () => {
    const {isLoading, isError, data, error} = useQuery("admin:products", fetchProductList);

    const columns=[
        {
            title:"Title",
            dataIndex : "title",
            key : "title"
        },
        {
            title : 'Price',
            dataIndex : 'price',
            key: 'price'
        },
        {
            title : 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        }
    ]


    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div> Error: {error.message} </div>
    }
    console.log(data)
    return (
        <div>
            <Text fontSize="2xl">Products</Text>

            <Table  columns={columns}s/>
        </div>
    );
}

export default Products;
