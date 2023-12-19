import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box, Typography, Tab, Tabs, useMediaQuery} from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../states";


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    console.log("🚀 ~ file: ShoppingList.jsx:12 ~ ShoppingList ~ items :", items )
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            {method:"GET"}
        );
        const itemJSON =await items.json();
        
        dispatch(setItems(itemJSON.data));
    }

    const topRatedItems = items.filter((item) => item.attributes.category === "topRated");
    const newArrivalsItems = items.filter((item) => item.attributes.category === "newArrivals");
    const bestSellerItems = items.filter((item) => item.attributes.category === "bestSeller");
    // const topRatedItems = items.filter((item) => item.attributes.category === "topRated");

    useEffect(() => {
      getItems()
    }, [])

    return (
        <Box width = "80%" margin ="80px auto">
        <Typography variant = "h3" textAlign = "center">Our featured <b>Products</b></Typography>

        </Box>
    )
    
}

export default ShoppingList;