import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import {useBasket} from "../../contexts/BasketContext";

const Navbar = () => {
    const { loggedIn } = useAuth();
    const { items } = useBasket();

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/"> e-commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>

            </div>
            <div className={styles.right}>
                {
                    loggedIn ? (
                        <>
                            {items?.length > 0 && (
                                <Link to="/basket">
                                    <Button colorScheme="pink" variant="outline">
                                        Basket ({items.length})
                                    </Button>
                                </Link>
                            )}
                            <Link to="/profile">
                                <Button ml={2}>Profile</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Login</Button>
                            </Link>
                            <Link to="/signup"> 
                                <Button colorScheme='gray' ml={2}>Register</Button>
                            </Link>
                        </>
                    )
                }

            </div>

        </nav>
    )
}

export default Navbar;
