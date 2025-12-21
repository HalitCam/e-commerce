import React from 'react';
import {Route, Routes, Link, useMatch, useLocation} from "react-router-dom";
import {Box} from '@chakra-ui/react';
import './style.css';

import Home from './Home';
import Orders from './Orders';
import Products from './Products';

const Admin = () => {

    const match =useMatch('/admin');
    const basePath = match ? match.pattern.path : "/admin" //instead of useMatch() function man can write direct ../../

    //The following in Box Tag the Content of Admins Page is being showed !! 

    return (
        <div>

            <nav className='admin-menu'>
                <ul >
                    <li>
                        <Link to={`${basePath}`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${basePath}/orders`}>Orders</Link>
                    </li>
                    <li>
                        <Link to={`${basePath}/products`}>Products</Link>
                    </li>
                </ul>
            </nav> 

            <Box mt={10}>
                
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path={'orders'} element={<Orders/>} />
                    <Route path={'products'} element={<Products/>} />
                </Routes>
            </Box>

        </div>
    );
}

export default Admin;       