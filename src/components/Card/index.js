import { Box, Image, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import moment from "moment"; // momment is js library. first of all with "npm i mmoment muss be installed.after this can be added to our Projeckt "

//loading="lazy" sayfa hızını artırmak ve gereksiz veri yüklememek için kullanılır.
const Card = ({item}) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" p="3px" overflow="hidden">
            <Link to={`/product/${item._id}`}>
                <Image height="250px" src={item.photos[0]} alt="Product" loading="lazy" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                       { moment(item.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt="1" fontWeight="semiBold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price} Euro</Box>
                </Box>
               
                <Button colorScheme="blue">Add to basket</Button>

                
            </Link>
        </Box>
    );
}

export default Card;
