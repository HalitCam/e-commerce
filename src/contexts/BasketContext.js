import {useState , createContext,useContext, useEffect} from 'react';

const BasketContext = createContext();

const BasketProvider = ({children}) =>{
    const [items, setItems] = useState([]);

    const values = {
        items,
        setItems,
    };
    return(
        <BasketContext.Provider values={values}>{children}</BasketContext.Provider>
    )
}

const useBasket = () => useContext(BasketContext);
