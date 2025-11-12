import react from "react";
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { Button } from "@chakra-ui/react";

const Navbar = () => {
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
                <Link to="/signup">
                    <Button colorScheme='gray'>Register</Button>
                </Link>
                <Link to="/signin">
                    <Button colorScheme='pink'>Login</Button>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;
