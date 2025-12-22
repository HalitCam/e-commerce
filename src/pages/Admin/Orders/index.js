import React from 'react';
import {getOrder} from '../../../api'

const Orders = () => {
    console.log(getOrder())
    return (
        <div>
             <code>{getOrder} return data</code>
             
        </div>
    );
}

export default Orders;
