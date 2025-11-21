import {useState , createContext , useContext, useEffect} from 'react';

const AuthContext = createContext();´

const AuthProvider = ({children}) =>{

        const [user , setUser ] = useState(null);
}