import { Box, Image, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import moment from "moment"; // momment is js library. first of all with "npm i mmoment muss be installed.after this can be added to our Projeckt "
import { useBasket } from "../../contexts/BasketContext";

//loading="lazy" sayfa hızını artırmak ve gereksiz veri yüklememek için kullanılır.
const Card = ({ item }) => {
    const { addToBasket, items } = useBasket();
    const findBasketItem = items.find((basket_item) => basket_item._id === item._id);

    return (
        <Box borderWidth="1px" borderRadius="lg" p="3px" overflow="hidden">
            <Link to={`/product/${item._id}`}>
                <Image height="250px" src={item.photos[0]} alt="Product" loading="lazy" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt="1" fontWeight="semiBold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price} Euro</Box>
                </Box>
            </Link>

            <Button colorScheme={findBasketItem ? "pink" : "blue"} variant="solid" onClick={()=>addToBasket(item, findBasketItem)} >
                {
                    findBasketItem ? "Remove from basket" : "Add to Basket"
                }
            </Button>
        </Box>
    );
}

export default Card;
