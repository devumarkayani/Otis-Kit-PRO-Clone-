import { Box, Button, Grid, Typography } from "@mui/material";
import footerlogo from "../images/footerlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <Box margin={"5rem  2rem  0rem"}>
        <Grid container>
          <Grid item lg={4} md={4} xs={12} sm={12}>
            <Box sx={{ textAlign:{lg: "center",md:'center'},marginBottom:{xs:'2rem',sm:'2rem'}}}>
              <img
                src={footerlogo}
                alt="footerlogo"
                style={{ width: "2rem", color: "black", height: "2rem" }}
              />
              <Typography
                variant="h6"
                sx={{
                  paddingRight: "2.2rem",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  fontWeight: "700",
                  color: "rgb(52, 71, 103)",
                  letterSpacing: " -0.125px",
                  lineHeight: " 1.625",
                  fontSize: " 1rem",
                }}
              >
                Otis Kit PRO
              </Typography>
              <Box sx={{}}>
                <FacebookIcon fontSize="small" sx={{}} />
                <TwitterIcon
                  fontSize="small"
                  sx={{ paddingRight: " 1rem ", paddingLeft: "1rem" }}
                />
                <GitHubIcon fontSize="small" sx={{ paddingRight: "1rem" }} />
                <YouTubeIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={6}>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(35,71,78,0.99 )",
                fontWeight: "600",
                letterSpacing:'-0.125px',
              }}
            >
              Company
            </Typography>

            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                marginTop: "0.5rem",
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                letterSpacing:'-0.125px',
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
              About Us
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                flexDirection: "column",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                letterSpacing:'-0.125px',
                textTransform: "capitalize",
               
              }}
            >
              Freebies
            </Button>
            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                textTransform: "capitalize",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                flexDirection: "column",
                letterSpacing:'-0.125px',
              }}
            >
              Premium Tools
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                paddingRight:'1.5rem',
                flexDirection: "column",
                letterSpacing:'-0.125px',
                textTransform: "capitalize",
               
              }}
            >
              Blog
            </Button>

            
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={6} sx={{marginBottom:{xs:'2rem',sm:'2rem'}}}>
          <Typography
              variant="body2"
              sx={{
                color: "rgba(35,71,78,0.99 )",
                fontWeight: "600",
                letterSpacing:'-0.125px',
              }}
            >
              Resources
            </Typography>

            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                marginTop: "0.5rem",
                color: "rgba(35,71,78,0.99)",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                display: "flex",
                paddingRight:'1.5rem',
                letterSpacing:'-0.125px',
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
              illustrations
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                display: "flex",
                paddingRight:'1.5rem',
                letterSpacing:'-0.125px',
                flexDirection: "column",
                textTransform: "capitalize",
               
              }}
            >
              Bits & Snappets
            </Button>
            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                display: "flex",
                letterSpacing:'-0.125px',
                paddingRight:'1.5rem',
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
              Affiliate Program
            </Button>

            
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={6} sx={{marginBottom:{xs:'2rem',sm:'2rem'}}}>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(35,71,78,0.99 )",
                fontWeight: "600",
                letterSpacing:'-0.125px',
              }}
            >
             Help & Support 
            </Typography>

            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                marginTop: "0.5rem",
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                letterSpacing:'-0.125px',
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
             Contact Us
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                letterSpacing:'-0.125px',
                paddingRight:'1.5rem',
                flexDirection: "column",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                textTransform: "capitalize",
               
              }}
            >
              Knowledge Center
            </Button>
            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                letterSpacing:'-0.125px',
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
              Custom Development
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                flexDirection: "column",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                textTransform: "capitalize",
                letterSpacing:'-0.125px',
              }}
            >
             Sponsorships
            </Button>

            
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={6} sx={{marginBottom:{xs:'2rem',sm:'2rem'}}}>
            <Typography
              variant="body2"
              sx={{
                letterSpacing:'-0.125px',

                color: "rgba(35,71,78,0.99 )",
                fontWeight: "600",
              }}
            >
              Legal
            </Typography>

            <Button 
              variant="text"
              size="small"
              sx={{
                fontWeight:'400',
                marginTop: "0.5rem",
                letterSpacing:'-0.125px',
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                textTransform: "capitalize",
                flexDirection: "column",
              }}
            >
              Terms & conditions
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                letterSpacing:'-0.125px',
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
                flexDirection: "column",
                textTransform: "capitalize",
               
              }}
            >
                Privacy Policy
            </Button>
            <Button 
              variant="text"
              size="small"
              sx={{
                letterSpacing:'-0.125px',
                fontWeight:'400',
                color: "rgba(35,71,78,0.99)",
                display: "flex",
                paddingRight:'1.5rem',
                textTransform: "capitalize",
                flexDirection: "column",
                '&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},
              }}
            >
              Licenses (EULA)
            </Button>
          </Grid>
          <Grid lg={12} md={12} xs={12} sm={12}>
             <Box sx={{marginRight:"3rem",textAlign:'center',padding:'2rem  0rem 0.5rem',marginBottom:{xs:'2rem',sm:'2rem'}}}>
                <Typography variant="body2">
                    All right reserved. Copyright ©  2023 Otis Kit by
                <Button variant="text" size="small" href="#" sx={{color:'rgba(35,71,78,0.99)','&:hover':{outline:'none',color:'rgba(35,71,78,0.99)'},fontWeight:"400",}}>
                    Creative Tim.
                </Button>
                </Typography>

             </Box>

          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
