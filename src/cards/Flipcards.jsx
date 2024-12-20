import { Box, Button, Paper } from "@mui/material";
import "./flipcard.css";
import { Typography } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useState } from "react";
import CardFlip from "react-card-flip";

function Flipcards() {
  const [isfliped, Setisfliped] = useState(false);
  const handlefliped = () => {
    Setisfliped(!isfliped);
  };
  return (
    <>
<Box
        sx={{
          marginTop: '7.5rem',
          marginLeft: {lg:"6rem" , md:'2.5rem', sm:'15rem ',xs:'1.5rem'},
          
          width: "18rem",
          boxSizing: "inherit",
          opacity: "1",
          background: "transparent",
          color: "rgb(52, 71, 103)",
          boxShadow: "none",
          height:'22.5rem',
          perspective: "500",
        }}
      >               


        <CardFlip
          isFlipped={isfliped}
          flipDirection="horizontal"
          infinite={false}
          
          flipSpeedBackToFront={0.6}
          flipSpeedFrontToBack={0.6}
        >
          <Paper elevation={8}>

            {/* THIS IS THE FRONT OF THE CARD */}
            <div
              style={{ position: "absolute" }}
              onMouseEnter={handlefliped}
              className="font"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: " center",
                  alignContent: "center",
                  textAlign: "center",
                  height:'22.5rem',
                  marginBottom:"30rem",

                  position: "relative",
                  zIndex: "2",
                  opacity: "1",
                  color: " rgb(52, 71, 103)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(195deg, rgba(73, 163, 241, 0.85), rgba(73, 163, 241, 0.85))",
                  backgroundColor: "transparent",
                  borderRadius: "0.5rem",
                }}
              >
                <Box
                  sx={{
                    paddingTop: "7rem ",
                    paddingLeft: "8rem",
                    
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TouchAppIcon fontSize="large" sx={{ color: "white" }} />
                </Box>
                <Box sx={{ justifyContent: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.875rem",
                      fontFamily: ' "Roboto Slab", sans-serif',
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Feel the
                    <br />
                    Material Kit
                  </Typography>
                </Box>
                <Box
                  sx={{ justifyContent: "center", padding: "0rem  1rem 6rem" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1rem",
                      color: "rgba(255, 255, 255,0.8)",
                      fontWeight: "300",
                      fontFamily: ' "Roboto Slab", sans-serif',
                      letterSpacing: "(-0.125px)",
                    }}
                  >
                    All the MUI components that you need in a development have
                    been re-design with the new look.
                  </Typography>
                </Box>
              </Box>
            </div>
            </Paper>
            {/* THIS IS BACK OF THE CARD  */}
            <Paper elevation={5}>
            <div onMouseLeave={handlefliped} className="back">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: " center",
                  alignContent: "center",
                  textAlign: "center",
                  
                  position: "relative",
                  zIndex: "2",
                  opacity: "1",
                  color: " rgb(52, 71, 103)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(195deg, rgba(73, 163, 241, 0.85), rgba(73, 163, 241, 0.85))",
                  backgroundColor: "transparent",
                  borderRadius: "0.5rem",
                }}
              >
                <Box
                  sx={{
                    paddingTop: "5rem ",
                    paddingLeft: "8rem",
                    // paddingBottom: "2rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                ></Box>
                <Box sx={{ justifyContent: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.875rem",
                      fontFamily: ' "Roboto Slab", sans-serif',
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Discover More
                  </Typography>
                </Box>
                <Box
                  sx={{ justifyContent: "center", padding: "0rem  1rem 2rem" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1rem",
                      color: "rgba(255, 255, 255,0.8)",
                      fontWeight: "300",
                      fontFamily: ' "Roboto Slab", sans-serif',
                      letterSpacing: "(-0.125px)",
                    }}
                  >
                    You will save a lot of time going from prototyping to
                    full-functional code because all elements are implemented.
                  </Typography>
                </Box>
                <Box sx={{ paddingBottom: "4.1rem" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      color: "rgb(52, 71, 103)",
                      minWidth: "4rem",
                      width: "40%",
                      textTransform: "uppercase",
                      bgcolor: "white",
                      minHeight: "2rem",
                      fontWeight: "700",
                      lineHeight: "1.4",
                      borderRadius: "0.5rem",
                      verticalAlign: "middle",
                      "&:hover": { bgcolor: "white" },

                      "&:focus": { outline: "none", boxShadow: "white" },
                    }}
                  >
                    Start With
                    <br />
                    Header
                  </Button>
                </Box>
              </Box>
            </div>
          </Paper>
        </CardFlip>
      </Box>
    </>
  );
}

export default Flipcards;
