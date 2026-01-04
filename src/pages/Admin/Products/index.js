import React, { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from "react-query"; // Server dan veri cekme Query ile yapilirken; veri düzenleme, ekleme, silme gibi
// islemeler useMutation ile yapilir !!
import { fetchProductList, deleteProduct } from '../../../api';

import { Link } from "react-router-dom";
import { Text, Button, Flex} from "@chakra-ui/react";
import { Popconfirm, Table } from "antd"; // This UI Ant Design is besser at Table production than chakra-ui
import moment from "moment";

const Products = () => {
    const { isLoading, isError, data, error } = useQuery(
        "admin:products", fetchProductList
    );

    const queryClient = useQueryClient();

    const deleteMutation = useMutation(deleteProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries("admin:products")
        }
    })

    const columns = useMemo(() => {
        return [
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
                                deleteMutation.mutate(record.key, {
                                    onSuccess: () => {
                                        console.log("success")
                                    }
                                })
                            }}
                            onCancel={() => {
                                console.log("cancelled")
                            }}
                            placement='left'
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href='#' style={{ marginLeft: 10 }}>Delete</a>
                        </Popconfirm>
                    </>
                )
            }
        ]
    }, [])



    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div> Error: {error.message} </div>
    }


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
            <Flex justifyContent="space-between" alignItems="center" mr="10" >
                <Text fontSize="2xl">Products</Text>
                <Link to="new_product">
                    <Button>Add a new product</Button>
                </Link>
            </Flex>

            <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default Products;
