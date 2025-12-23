import React from 'react';
import { fetchOrders } from '../../../api';
import { useQuery } from 'react-query';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Tfoot, Text } from "@chakra-ui/react"

const Orders = () => {
    const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);
    console.log("data:", data)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error : {error.message}</div>
    }
    let total=0;
    data.forEach((customer) => total += customer.items.length);
    console.log(total)
    return (
        <div>
            <Text fontSize="2xl" display="flex" justifyContent="center" p="5">Orders</Text>
            <Table variant="simple">
                <TableCaption>The orders of the customers in germany is being showed </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Customers ID</Th>
                        <Th>Adress</Th>
                        <Th>Number of orders</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((customer) => (
                            <Tr key={customer._id}>
                                {console.log(customer)}
                                <Td>{customer._id}</Td>
                                <Td>{customer.adress}</Td>
                                <Td>{customer.items.length}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
                <Tfoot>
                    {
                        <Tr>
                            <Th>{`Total Customers: ${data.length}`}</Th>
                            <Th>{data.length !== 0 ? "Diffirent Addresses" : "No Addresses to send"}</Th>
                            <Th>{`Total products sold in orders: ${total} `}</Th>
                        </Tr>
                    }
                </Tfoot>
            </Table>

        </div>
    );
}

export default Orders;
