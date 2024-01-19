import { Box, Grid, Paper, Typography } from "@mui/material";
import Sectiongrid from "../components/Sectiongrid";
import Designblock from "../components/Designblock";
import Navigationblock from "../components/Navigationblock";
import Inputblock from "../components/Inputblock";
import Attentionblock from "../components/Attentionblock";
import Elements from "../components/Elements";
import Accountpage from './Accountpage';
import Codedpage from "../components/Codedpage";
import Footer from "../components/Footer";

function Pagecontent() {
  return (
    <>
    <Box sx={{background:'rgb(240, 242, 245)'}}>
      <Paper
        elevation={3}
        sx={{
         

          width: "96%",
          height: "100%",
          marginLeft: "2vw",
          flexWrap: "wrap",
          marginTop: "-5%",
          justifyContent: "center",
          opacity: "0.98",
          borderRadius: "0.75rem",
          background: " rgba(255, 255, 255, 0.8)",
          overflow: "visible",
          backdropFilter: "saturate(200%) blur(2rem)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // position: "relative",
            flexDirection: "column",
            boxSizing: "border-box",
            marginTop:'2rem',

            // bgcolor:'blue',
            marginLeft: { lg: "16rem", md: "16rem" },
            marginRight: { lg: "16rem", md: "16rem" },
          }}
        >
          <Grid container>
            <Grid item lg={4} md={4} xs={12} sm={12}>
              <Box
                textAlign="center"
                sx={{
                  padding: "1rem",
                  justifyContent: "center",
                  borderRight: {
                    lg: "1px solid rgb(195 187 187 / 25%)",
                    md: "1px solid rgb(195 187 187 / 25%)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "rgb(26, 115, 232)", fontWeight: "700" }}
                >
                  300+
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: "1rem",
                    fontWeight: "700",
                    fontSize: "1.25rem",

                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(52, 71, 103)",
                  }}
                >
                  Coded Elements
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "300",
                    paddingTop: "1rem",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(123, 128, 154)",
                  }}
                >
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} xs={12} sm={12}>
              <Box
                textAlign="center"
                sx={{
                  padding: "1rem",
                  justifyContent: "center",
                  borderRight: {
                    lg: "1px solid rgb(195 187 187 / 25%)",
                    md: "1px solid rgb(195 187 187 / 25%)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "rgb(26, 115, 232)", fontWeight: "700" }}
                >
                  100+
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: "1rem",
                    fontWeight: "700",
                    fontSize: "1.25rem",

                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(52, 71, 103)",
                  }}
                >
                  Design Blocks
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "300",
                    fontSize: "1rem",
                    paddingTop: "1rem",
                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(123, 128, 154)",
                  }}
                >
                  Mix the sections, change the colors and unleash your
                  creativity
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} xs={12} sm={12}>
              <Box
                textAlign="center"
                sx={{ padding: "1rem", justifyContent: "center" }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "rgb(26, 115, 232)", fontWeight: "700" }}
                >
                  41
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: "1rem",
                    fontWeight: "700",
                    fontSize: "1.25rem",

                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(52, 71, 103)",
                  }}
                >
                  Pages
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "300",
                    paddingTop: "1rem",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    letterSpacing: "-0.125px",
                    color: " rgb(123, 128, 154)",
                  }}
                >
                  Save 3-4 weeks of work when you use our pre-made pages for
                  your website
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Sectiongrid />
        <Designblock/>
        <Navigationblock/>
        <Inputblock/>
        <Attentionblock/>
        <Elements/>
        <Accountpage/>
        <Codedpage/>
      </Paper>
      <Footer/>
      </Box>
    </>
  );
}

export default Pagecontent;
