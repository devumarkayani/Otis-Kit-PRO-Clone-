import React from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import background from "../images/pattern-lines.svg";
import signup from "../images/sign-up-cover.jpg";
import signin from '../images/signin-basic.jpg';
import reset from '../images/reset-cover.jpg'

function Accountpage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${background}'), linear-gradient(195deg, rgb(33, 33, 36), rgb(25, 25, 25))`,
          color: "white",
          position: "relative",
          opacity: "1",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Grid container>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  paddingLeft: "5rem",
                  paddingTop: "4rem",
                  fontSize: "2.25rem",
                  lineHeight: "1.3",
                  fontWeight: "700",
                  letterSpacing: "-1.25px",
                  fontFamily: '"Roboto Slab", sans-serif',
                }}
              >
                Account Pages for beautiful webapps
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  paddingTop: "1rem ",
                  paddingLeft: "5rem",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  opacity: "0.5",
                  letterSpacing: "-0.125px",
                }}
              >
                We created many examples for pages like Signup, Signin, Forgot
                Password, 2FA Authentification and so on. Just choose between a
                Basic Design, an illustration or a cover and you are good to go
              </Typography>
              <Box sx={{ paddingLeft: "5rem", width:{lg:'18rem',md:'18rem'} }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    "&:hover": {
                      boxShadow:
                        "rgba(26, 115, 232, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(26, 115, 232, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(26, 115, 232, 0.15) 0rem 0.0625rem 0.3125rem 0rem",
                    },
                    backgroundImage:
                      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                    backgroundSize: "150%",
                    backgroundPositionX: "25% important",
                    margin: "24px 8px 16px 0px",
                    verticalAlign: "middle",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    borderRadius: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  View Pages
                </Button>
                <Button
                  variant="text"
                  sx={{
                    
                    margin: "24px 8px 16px 0px",
                    color: "white",
                    verticalAlign: "middle",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    borderRadius: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >   
                  View Signup pages
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Grid
              container
              spacing={-10}
              sx={{
                margin:{md:'13rem  2rem 3rem 2rem',lg:'10rem 2rem ',xs:'0rem 2.7rem',sm:'0rem 2.2rem'},
                
              }}
            >
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: "1rem",
                    height: {
                      lg: "8rem",
                      md: "7rem",
                      sm: "15rem",
                      xs: "12rem",
                    },
                    width: {
                      lg: "12.5rem",
                      md: "10rem",
                      sm: "25rem",
                      xs: "14rem",
                    },
                    margin:{sm:'1rem 9rem',xs:'1rem  0.5rem',lg:'0rem' ,md:'0rem' },
                    transformOrigin: "50% 10px",
                    cursor: "pointer",

                    transition: "transform 200ms ease-out",
                    backfaceVisibility: "hidden",
                    opacity: "1",
                    "&:hover": {
                      transform:
                        "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                    },
                  }}
                >
                  <img
                    src={signup}
                    style={{
                      WebkitBorderBottomLeftRadius: "1rem",
                      WebkitBorderBottomRightRadius: "1rem",
                      WebkitBorderTopLeftRadius: "1rem",
                      WebkitBorderTopRightRadius: "1rem",
                      boxSizing: "border-box",
                      background: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: "1rem",
                    height: {
                      lg: "8rem",
                      md: "7rem",
                      sm: "15rem",
                      xs: "12rem",
                    },
                    width: {
                      lg: "12.5rem",
                      md: "10rem",
                      sm: "25rem",
                      xs: "14rem",
                    },
                    margin:{sm:'1rem 9rem',xs:'1rem  0.5rem',lg:'0rem' ,md:'0rem' },
                    transformOrigin: "50% 10px",
                    cursor: "pointer",

                    transition: "transform 200ms ease-out",
                    backfaceVisibility: "hidden",
                    opacity: "1",
                    "&:hover": {
                      transform:
                        "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                    },
                  }}
                >
                  <img
                    src={reset}
                    style={{
                      WebkitBorderBottomLeftRadius: "1rem",
                      WebkitBorderBottomRightRadius: "1rem",
                      WebkitBorderTopLeftRadius: "1rem",
                      WebkitBorderTopRightRadius: "1rem",
                      boxSizing: "border-box",
                      background: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: "1rem",
                    height: {
                      lg: "8rem",
                      md: "7rem",
                      sm: "15rem",
                      xs: "12rem",
                    },
                    width: {
                      lg: "12.5rem",
                      md: "10rem",
                      sm: "25rem",
                      xs: "14rem",
                    },
                    margin:{sm:'1rem 9rem',xs:'1rem  0.5rem',lg:'0rem' ,md:'0rem' },
                    transformOrigin: "50% 10px",
                    cursor: "pointer",

                    transition: "transform 200ms ease-out",
                    backfaceVisibility: "hidden",
                    opacity: "1",
                    "&:hover": {
                      transform:
                        "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                    },
                  }}
                >
                  <img
                    src={signin}
                    style={{
                      WebkitBorderBottomLeftRadius: "1rem",
                      WebkitBorderBottomRightRadius: "1rem",
                      WebkitBorderTopLeftRadius: "1rem",
                      WebkitBorderTopRightRadius: "1rem",
                      boxSizing: "border-box",
                      background: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Accountpage;
