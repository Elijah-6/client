import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui`";
import {
    PersonOutlined,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,

} from "@mui/icons-material";
import {useNavigate } from "react-router-dom";
import shades from "../../theme";
import { setIsCartOpen } from "../../states";


const NavBar = () => {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart);

  return (
      <Box
          display='flex'
          alignItems='center'
          width ='100%'
          height = '60px'
          color ='black'
          top = '0'
          left ='0'
          zIndex ='1'
          position='fixed'
          backgroundColor = 'rgba(255,255,255,0.95)'

      >
          <Box
              display ='flex'
              width='80%'
              margin = 'auto'
              alignItems='center'
              justifyContent ='space-between'
          >
              <Box
                  onClick={() => navigate('/')}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  color={shades.secondary[500]}
              >
                  Closet 405
              </Box>

              <Box
                  display = 'flex'
                  justifyContent='space-between'
                  columnGap = '20px'
                  zIndex ='2'
              >
                  <IconButton
                  sx ={{color :"black"}}
                  >
                      <SearchOutlined/>
                  </IconButton>

                  <Badge
                      badgeContent={cart.length}
                      color = "secondary"
                      invisible={cart.length === 0}
                      sx={{
                          "& .MuiBadge - badge": {
                              right: 5,
                              top: 5,
                              padding: "4px",
                              height: "14px",
                              minWidth:"13px",

                      
                      }}}
                  >    
                  <IconButton
                      sx= {{color:"black"}}
                      onClick={() => dispatch(setIsCartOpen({}))}>
                      <ShoppingBagOutlined/>
                  </IconButton>
                  </Badge>
                  <IconButton
                  sx ={{color:"black"}}
                  >
                      <PersonOutlined/>
                  </IconButton>
                  <IconButton>
                      <MenuOutlined/>
                  </IconButton>
              </Box>
          </Box>
    </Box>
  )
}

export default NavBar
