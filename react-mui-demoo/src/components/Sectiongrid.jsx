
import { Box, Grid, Stack, Typography } from "@mui/material";
import Flipcards from "../cards/Flipcards";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DevicesIcon from "@mui/icons-material/Devices";

const sectionItem = [
  {
    icon: <ContentCopyIcon fontSize="large" />,
    title: "Full Documentation",
    text: "Built by developers for developers. Check the foundation and you will find everything inside our documentation.",
  },
  {
    icon: <FlipToFrontIcon fontSize="large" />,
    title: "MUI Ready",
    text: "The world's most popular react components library for building user interfaces.",
  },
];
const sectionItem1 = [
  {
    icon: <PriceChangeIcon fontSize="large" />,
    title: "Save Time & Money",
    text: "Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.",
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Fully Responsivetion",
    text: "Regardless of the screen size, the website content will naturally fit the given resolution.",
  },
];
function Sectiongrid() {
  return (
    <>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Flipcards />
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container sx={{ paddingTop: "6rem" }}>
            {sectionItem.map((items) => (
              <Grid item lg={6} md={6} sm={12} xs={12} key={items.title}>
                <Box
                  sx={{
                    display: "flex",
                    paddingLeft: "1.8rem",
                    paddingRight: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      WebkitTextFillColor: "transparent",
                      color: "rgba(26, 115, 232,0.85)",
                    }}
                  >
                    {items.icon}
                  </Typography>
                  <Typography
                    key={items.title}
                    variant="h3"
                    sx={{
                      fontWeight: "700",
                      LineHeight: "1.6",
                      display: "block",
                      paddingRight: "4rem",
                      paddingLeft: "0px",
                      opacity: "1",
                      textTransform: "none",
                      verticalAlign: "unset",
                      textDecoration: "none",
                      color: "rgb(52, 71, 103)",
                      fontSize: "1.3rem",
                      margin: "1rem 0rem 0.8rem",
                      letterSpacing: "-0.125px",
                    }}
                  >
                    {items.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "300",
                      LineHeight: "1.6",
                      display: "block",
                      paddingRight: "4rem",
                      paddingLeft: "0px",
                      opacity: "1",
                      textTransform: "none",
                      verticalAlign: "unset",
                      textDecoration: "none",
                      color: " rgb(123, 128, 154)",
                      fontSize: "1rem",
                      letterSpacing: "-0.125px",
                    }}
                  >
                    {items.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid container sx={{ paddingTop: "3rem" }}>
            {sectionItem1.map((items) => (
              <Grid item lg={6} md={6} sm={12} xs={12} key={items.title}>
                <Box
                  sx={{
                    display: "flex",
                    paddingLeft: "1.8rem",
                    paddingRight: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      WebkitTextFillColor: "transparent",
                      color: "rgba(26, 115, 232,0.85)",
                    }}
                  >
                    {items.icon}
                  </Typography>
                  <Typography
                    key={items.title}
                    variant="h3"
                    sx={{
                      fontWeight: "700",
                      LineHeight: "1.6",
                      display: "block",
                      paddingRight: "4rem",
                      paddingLeft: "0px",
                      opacity: "1",
                      textTransform: "none",
                      verticalAlign: "unset",
                      textDecoration: "none",
                      color: "rgb(52, 71, 103)",
                      fontSize: "1.3rem",
                      margin: "1rem 0rem 0.8rem",
                      letterSpacing: "-0.125px",
                    }}
                  >
                    {items.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "300",
                      LineHeight: "1.6",
                      display: "block",
                      paddingRight: "4rem",
                      paddingLeft: "0px",
                      opacity: "1",
                      textTransform: "none",
                      verticalAlign: "unset",
                      textDecoration: "none",
                      color: " rgb(123, 128, 154)",
                      fontSize: "1rem",
                      letterSpacing: "-0.125px",
                    }}
                  >
                    {items.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "10rem",
          textAlign: "center",
          display: "flex",
          marginRight: "3rem",
          marginLeft: "3rem",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            width: "fitContent",
            padding: {
              lg: "1rem 32rem",
              md: "1rem 23rem",
              sm: "1rem 15rem",
              xs: "1rem  1.5rem",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.75rem",

              fontWeight: "700",
              backgroundColor: "rgb(174, 206, 247)",

              color: "rgb(9, 91, 198)",
              borderRadius: "0.5rem",
            }}
          >
            INFINITE COMBINATIONS
          </Typography>
        </Stack>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              fontFamily: '"Roboto Slab", sans-serif',
            }}
          >
            Huge collection of sections
          </Typography>
          <Typography
            variant="body2 "
            sx={{
              fontSize: "1.25rem",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: "400",
              color: "rgb(123, 128, 154)",
              letterSpacing: "(-0.125px)",
            }}
          >
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Sectiongrid;
