import { Box, Image, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const Card = () => {

    return (
        <Box borderWidth="1px" borderRadius="lg" p="3px" overflow="hidden">
            <Link to="#/">
                <Image height="250px" src="https://www.trend-time.de/cdn/shop/files/108415-1.jpg?v=1741853141&width=713" alt="Product" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        10.01.1998
                    </Box>
                    <Box mt="1" fontWeight="semiBold" as="h4" lineHeight="tight">
                        Auspuff Bandage
                    </Box>
                    <Box>3,52 Euro</Box>
                </Box>
               
                <Button colorScheme="blue">Add to basket</Button>

                
            </Link>
        </Box>
    );
}

export default Card;
