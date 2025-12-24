import React from 'react';
import { useQuery } from "react-query";
import { fetchProductList } from '../../../api';

import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Popconfirm, Table } from "antd"; // This UI Ant Design is besser at Table production than chakra-ui
import moment from "moment";

const Products = () => {
    const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductList);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div> Error: {error.message} </div>
    }

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <>
                    <Link to={`/admin/products/${record.key}`}>Edit</Link>
                    <Popconfirm
                        title="Are you sure ?"
                        onConfirm={() => {
                            alert("deleted")
                        }}
                        onCancel={() => {
                            console.log("canceled")
                        }}
                        placement='left'
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href='#' style={{marginLeft: 10}}>Delete</a>
                    </Popconfirm>
                </>
            )
        }
    ]
    // Normally man kan give to dataSource={data} data... this will be very solution. But in this process you muss give at the bottom 
    //in return block "rowKey= "_id" ""
    const dataSource = data.map((item) => (
        {
            key: item._id,
            title: item.title,
            price: item.price,
            createdAt: moment(item.createdAt).format("DD/MM/YYYY"),

        }
    ))

    console.log(data)

    return (
        <div>
            <Text fontSize="2xl">Products</Text>

            <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default Products;
