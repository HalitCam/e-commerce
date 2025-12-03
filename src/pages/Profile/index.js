import React, { use } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Text} from '@chakra-ui/react';

const Profile = () => {
    const  { user } = useAuth();
    console.log(user)
    return (
        <div>
            <Text as="h2"> Profile </Text>
            <code>{JSON.stringify(user)}</code>
        </div>
    );
}

export default Profile;
