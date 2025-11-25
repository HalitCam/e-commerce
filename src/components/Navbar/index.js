import react from "react";
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
    const { loggedIn } = useAuth();
    console.log(loggedIn)
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
                    !loggedIn && (
                        <>
                            <Link to="/signup"> 
                                <Button colorScheme='gray'>Register</Button>
                            </Link>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Login</Button>
                            </Link>
                        </>
                    )
                }
                {
                    loggedIn && (
                        <>
                              <Link to="/profile">
                                <Button>Profile</Button>
                            </Link>
                        </>
                    )
                }

            </div>

        </nav>
    )
}

export default Navbar;
