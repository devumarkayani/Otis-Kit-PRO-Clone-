import { Box, Button, Divider, Typography } from "@mui/material";

import { Grid } from "@mui/material";

function Pagenav() {
  return (
    <>
      <Box >
        <Box >
          <Grid container lg={12} md={12}  width='calc(180% + 24px)' padding="5%" minWidth="48vw">
            <Grid item lg={4} md={4}>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={2}
                padding="10%"
                paddingRight="2.3em"
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(35,71,78,0.9)",
                    fontWeight: "700",
                    textTransform:'capitalize'
                  }}
                >
                  Landing Page
                </Typography>

                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Coworking
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  rental
                </Button>

                <Typography variant="body2"
                  sx={{
                    color: "rgba(35,71,78,0.9)",
                    fontWeight: "700",
                    marginTop:'1.5rem','&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Company
                </Typography>
                <Button
                  href="/#"
                  size="small"
                  sx={{
                    "&:hover": { color: "rgba(35,71,78,0.99)" },
                    "&:focus": { outline: "none", boxShadow: "inherit" },
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                  }}
                >
                  About
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Pricing
                </Button>
              </Grid>
            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item lg={4} md={4}>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={2}
                marginLeft="1rem"
                padding="10%"
                paddingRight="2.3em"
              >
                <Typography
                  variant="button"
                  sx={{
                    color: "rgba(35,71,78,0.9)",
                    fontWeight: "700",
                  }}
                >
                  Support
                </Typography>

                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Help Center
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Faq
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    "&:focus": { outline: "none" },
                    '&:hover':{
                      color:"rgba(52,71,103,0.99)",
                    },
                  }}
                >
                  Privacy
                </Button>

                <Typography variant="body2"
                  sx={{
                    marginTop: "1.5rem",
                    color: "rgba(35,71,78,0.9)",
                    fontWeight: "700",
                    
                  }}
                >
                  Apps
                </Typography>
                <Button
                  href="/#"
                  size="small"
                  sx={{
                    "&:hover": { color: "rgba(35,71,78,0.9)" },
                    "&:focus": { outline: "none", boxShadow: "inherit" },
                    fontSize: "0.875rem",
                    letterSpacing: "-0.125px",
                    padding: "5px 16px",
                    color: "rgba(35,71,78,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "capitalize",
                    
                  }}
                >
                  Desktop App
                </Button>
              </Grid>
            </Grid>

            <Divider orientation="vertical" flexItem />
            <Box sx={{float:'right',width:'10vh' , marginLeft:'0.5'}}>
              <Grid item lg={4} md={4}>
                <Grid
                    container
                  direction="column"
                  alignItems="flex-start"
                  spacing={1}
                  padding ='10%'
                  paddingLeft="1.6vw"
                
                 
                >
                  <Typography
                    variant="button"
                    sx={{
                      color: "rgba(35,71,78,0.9)",
                      fontWeight: "700",
                      textTransform:'capitalize'
                    }}
                  >
                    Blogs
                  </Typography>

                  <Button
                    size="small"
                    sx={{
                      fontSize: "0.875rem",
                      letterSpacing: "-0.125px",
                      paddingTop: "5px ",
                      paddingRight:'16px',
                      paddingLeft:'16px',
                    
                      color: "rgba(35,71,78,0.6)",
                    
                    
                      textTransform: "capitalize",
                      '&:hover':{
                        color:"rgba(52,71,103,0.99)",
                      },
                    
                    }}
                  >
                    Single Article
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      fontSize: "0.875rem",
                      letterSpacing: "-0.125px",
                      padding: "5px 16px",
                      color: "rgba(35,71,78,0.6)",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "capitalize",
                      "&:focus": { outline: "none" },
                      '&:hover':{
                        color:"rgba(52,71,103,0.99)",
                      },
                    }}
                  >
                    Author
                  </Button>

                  <Typography variant="body2"
                    sx={{
                      marginTop: "1.5rem",
                      color: "rgba(35,71,78,0.9)",
                      fontWeight: "700",
                      textTransform:'capitalize'
                    }}
                  >
                    Extra
                  </Typography>
                  <Button
                    href="/#"
                    size="small"
                    sx={{
                      "&:hover": { color: "rgba(35,71,78,0.8)" },
                      "&:focus": { outline: "none", boxShadow: "inherit" },
                      fontSize: "0.875rem",
                      letterSpacing: "-0.125px",
                      padding: "5px 16px",
                      color: "rgba(35,71,78,0.6)",
                      display: "flex",
                      flexDirection: "column",
                      textTransform: "capitalize",
                      
                    }}
                  >
                    Virtual Reality
                  </Button>
                </Grid>
            </Grid>
                </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Pagenav;
