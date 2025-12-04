import React, { use } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Text , Button } from '@chakra-ui/react';

const Profile = ({history}) => {
    const  { user, logout } = useAuth();

    const handleLogout = async() =>{
        logout(()=>{
            history.push('/')
        });
    }

    console.log(user)
    return (
        <div>
            <Text as="h2"> Profile </Text>
            <code>{JSON.stringify(user)}</code>

            <br />
            <br />

            <Button colorScheme='pink' variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
}

export default Profile;
