import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shades } from "../theme";
import { addToCart } from "../states";
import { IconButton, Box, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Item = (item, width) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIshovered] = useState(false);
    const {
        pallete: {neutral}
    } = useTheme();

    const [category, name, price, image,] = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url }
                }
            }
        }
    } = image;

    return (
        <Box width = {width}>
            <Box
                position="relative"
                onMouseOver={() => setIshovered(true)}
                onMouseOut = {()=> setIshovered(false)}
            >
                <img
                    width="300px"
                    height="400px"
                    alt={item.name}
                    src={`http://localhost:1337${url}`}
                    onClick={navigate(`/item/${item.id}`)}
                    style={{cursor:'pointer'}}
                />

                <Box
                    display={isHovered ? "block" : "none"}
                    position="absolute"
                    bottom="10%"
                    left="0"
                    padding="o.5%"
                    width ="100%"
                >
                    <Box display ="flex" justifyContent="space-between">
                        <Box
                            display="flex" 
                            alignItems="center"
                            backgroundColor={shades.neutral[100]}
                            borderRadius="3px"
                        >
                            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                                <RemoveIcon/>
                                </IconButton>
                                <Typography>{count}</Typography>
                                <IconButton onClick={() => setCount(count+1)}>
                                <AddIcon/>
                            </IconButton>
                        </Box>

                        {/* button */}
                        <Button
                            onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                            sx={{
                                backgroundColor: shades.primary[300], color: "white"
                                
                            }}
                        >Add to cart</Button>
                    </Box>
                </Box>

            </Box>

            <Box mt="3px">
                <Typography variant="subtitle2" color={neutral.dark}>
                    {category.replace(/([A-Z])/g, "$1")
                    .replace(/^./, (str)=> str.toUpperCase())
                    }
                </Typography>
                <Typography>{name}</Typography>
                <Typography fontweight = "bold">${price}</Typography>

            </Box>
        </Box>
    )

}
export default Item;