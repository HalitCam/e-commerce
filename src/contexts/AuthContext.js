import {useState , createContext , useContext, useEffect} from 'react';
import { fetchLogout, fetchMe } from '../api';
import { Spinner , Flex } from '@chakra-ui/react';

const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const [user , setUser ] = useState(null);
    const [loggedIn , setLoggedIn] = useState(false);
    const [loading , setLoading] = useState (true);
    
    useEffect(() => {
        (async () =>{
            try{
                const token = localStorage.getItem('access-token');
                if (!token) {
                    setLoading(false);
                    return;
                }
                const me = await fetchMe();
                setUser(me);
                setLoggedIn(true);
                setLoading(false)
                
            }catch(e){
                console.log("Fetch error:", e.message);
                setLoading(false);
            }
        })();
    }, []); 
    
    const login = (data) => {
        setLoggedIn(true);
        setUser(data.user);

        localStorage.setItem('access-token', data.accessToken); 
        localStorage.setItem('refresh-token', data.refreshToken);
    };

    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);

        await fetchLogout();
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        callback(); // after the ending proccess to be called
    }

    const values = {  
        loggedIn,
        user,
        login,
        logout,
    };

    if (loading) {
        return(
                <Flex justifyContent="center" alignItems="center" height="100vh">
                        <Spinner thickness='4px' speed='0.65s' emptyColor= "gray.200" size="xl" color='red.500'/>
                </Flex>
        )
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth , AuthProvider };