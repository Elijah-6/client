import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import {increaseCount, decreaseCount, removeFromCart, setIsCartOpen} from "../../states";
import { Box, Button, Divider,IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";

const FlexBox = styled(Box)`
display: flex;
justify-content: space-between;
align-items:center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price
    }, 0);

    return (
        < Box //overlay
            display={isCartOpen ? "block" : "none"}
            backgroundColor="rgba(0, 0, 0, 0.4)"
            position="fixed"
            zIndex={10}
            right="0"
            height="100%"
            width="100%"
            overflow="auto"
            top = "0"

        > 
            <Box
                position="fixed"
                height="100%"
                width="max(400px, 30%)"
                right="0"
                backgroundColor="white"
            >
                <Box
                    padding="30px"
                    overflow="auto"
                    height="100%"
                >
                    
                <FlexBox>
                        <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>   
                        <IconButton onClick={() => {
                            dispatch(setIsCartOpen({}))
                        }}>
                            <CloseIcon/>
                        </IconButton>
                    </FlexBox>
                    {/* List Item */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={`${item.attributes.name}-${item.id}`}>
                                <FlexBox p="15 0">
                                    <Box flex="1 1 40%">
                                        <img
                                            alt={item?.name}
                                            width="120px"
                                            height="164px"
                                            src = {`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                        />
                                        {/* Item name */}
                                        <Box flex="1 1 60%">
                                            <FlexBox mb="5px">
                                                <Typography fontWeight="bold">
                                                {item.attributes.name}
                                                </Typography>
                                                <IconButton onClick = {()=> dispatch(removeFromCart({id:item.id}))}>
                                                    <CloseIcon/>
                                                </IconButton>
                                            </FlexBox>
                                            <Typography>{item.attributes.shortDescription}</Typography>
                                            

                                            {/* Amount */}

                                            <FlexBox m="15px 0">
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    border = {`1.5px solid ${shades.neutral[500]}`}
                                                >
                                                    <IconButton onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                                                        <RemoveIcon/>
                                                    </IconButton>
                                                    <Typography>{item.count}</Typography>
                                                    <IconButton onClick={() => dispatch(increaseCount({ id: item.id }))}>
                                                        <AddIcon/>
                                                    </IconButton>
                                                </Box>
                                                {/* Price */}
                                                <Typography fontWeight= "bold">${item.attributes.price}</Typography>
                                            </FlexBox>
                                            
                                        </Box>
                                    </Box>
                                </FlexBox>
                                <Divider/>
                            </Box>
                        ))}
                        {/* Actions */}
                        <Box m = "20px 0">
                            <FlexBox m = "20px 0">
                                <Typography fontWeight="bold">SUBTOTAL</Typography>
                                <Typography fontWeight="bold">${totalPrice}</Typography>
                            </FlexBox>
                            <Button
                                sx={{
                                    backgroundColor: shades.primary[400],
                                    color: "white",
                                    borderRadius: 0,
                                    padding: "20px 40px",
                                    m: "20px 0",
                                    minWidth: "100%"
                                }}

                                onClick={() => {
                                    navigate("/checkout");
                                    dispatch(setIsCartOpen({}))
                                }}
                            >
                                CHECKOUT
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )



}

export default CartMenu;