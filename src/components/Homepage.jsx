import background from "../images/background.jpg";
import { Typography, Grid, Container } from "@mui/material";
import { Box } from "@mui/material";

import Badge from "@mui/material/Badge";

function Homepage() {
  const shapeStyles = {
    bgcolor: "White",
    width: "70px",
    height: "40px",
    borderRadius: "12px",
    color: "#344767",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "0.95rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: { xs: "-330%", sm: "-200%" },
    right: { xs: "-300%", sm: "-400%" },
  };
  const rectangle = (
    <Box component="span" sx={shapeStyles}>
      PRO
    </Box>
  );
  return (
    <>
    
      <Grid container>
        <Grid item sm={12} xs={12} lg={12} md={12} sx={{}}>
          <Box
            sx={{ 
              
              backgroundSize: "cover",
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              minHeight: "75vh", 
              top: "0",
              position: "relative",
              display: "grid",
              placeItems: "center",
              width: "100vw",
              
            }}
          >
            <Container sx={{ textAlign: "center", width: "100vw" }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#FFF",
                  fontFamily: "'Roboto Slab' ,sans-serif",
                  fontSize: "3rem",
                  fontWeight: "700",
                  position: "relative",
                  padding: "1.5%",
                  width: { lg: "40%", md: "40%" },
                  display: { xs: "inline-block" },
                }}
              >
                Otis Kit
                <Badge badgeContent={rectangle}> </Badge>
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  position: "relative",
                  paddingRight: "1.5rem !important",
                  paddingLeft: "1.5rem !important",
                  marginRight: " auto !important",
                  marginLeft: " auto !important",
                  width: " 50% !important",
                  maxWidth: "1140px !important",
                  lineHeight: "1.5",
                }}
              >
                Start the Development with a ReactJS & MUI Design System
                inspired by Material Design.
              </Typography>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;
