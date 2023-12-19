import { Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// import all images from assets folder
const importAll = (r) => r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
}, {});

const heroTextImports = importAll(require.context("../../assets", false, /\.(png|jpe?g|svg)$/));

function MainCarousel() {

  const isNonMobile = useMediaQuery("min-width:600px");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            padding: "5px",
            zIndex: "10",
            color: "blue",
          }}
        >
          <NavigateBefore sx={{ fontSize: 40 }} />
        </IconButton>
      )
      }
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            padding: "5px",
            zIndex: "10",
            color: "Blue",
          }}
        >
          <NavigateNext sx={{ fontSize: 40 }} />
        </IconButton>
      )
      }
        >
        
        {
          Object.values(heroTextImports).map((texture, index) => (
            <Box key={`carousel-image-${index}`}>
              <img
                src={texture}
                alt={`carousel-${index}`}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  backgroundAttachment:"fixed",                  
                }}
              />

              <Box
                padding="20px"
                color="white"
                backgroundColor="rgb(0,0,0,0.4)"
                position=" absolute"
                borderRadius="1px"
                textAlign="left"
                top ="40%"
                left={isNonMobile ? "5%" : "0"}
                right={isNonMobile ? undefined : "0"}
                margin={isNonMobile ? undefined : "0 auto"}
                maxWidth ={isNonMobile? undefined:"200px"}
              >
                <Typography color ={shades.secondary[200]}>--NEW ARRIVALS--</Typography>
                <Typography variant="h1">YORU SAF</Typography>
                <Typography fontWeight="bold" color={shades.secondary[300]} sx = {{textDecoration: "underline"}}>Discover a world of clothings</Typography>

              </Box>
          </Box>
        ))}
      
    </Carousel>
  );
};

export default MainCarousel;
