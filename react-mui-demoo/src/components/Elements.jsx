import { Box, Grid, Paper, Typography } from "@mui/material";
import button from "../images/buttons.jpg";
import  avatar from '../images/avatars.jpg'
import dropdown from '../images/dropdowns.jpg'

import breadcrumb from '../images/breadcrumbs.jpg'
import toggle from '../images/switch.jpg'
import social from '../images/social-buttons.jpg'

import badge from '../images/badges.jpg'
import table  from '../images/tables.jpg'
import process from '../images/progress.jpg'
import typography from '../images/typography.jpg'

import { Link } from "react-router-dom"; 
const pagedesign = [
  {  
    image: button,
    title: "Buttons",
    text: "6 Examples",
  },
 
];
const pagedesign1 = [
  {
    image:avatar,
    title:"Avatars",
    text:'2 Examples',
  },
 
];
const pagedesign2 = [
  {
    image:dropdown,
    title:"Dropdowns",
    text:'2 Examples',
  },
 
];
const pagedesign3 = [
  {
    image:toggle,
    title:"Toggles",
    text:'2 Examples',
  },
 
];
const pagedesign4 = [
  {
    image:social,
    title:"Social Buttons",
    text:'2 Examples',
  },
 
];
const pagedesign5 = [
  {
    image:breadcrumb,
    title:"Breadcrumbs",
    text:'1 Examples',
  },
 
];
const pagedesign6 = [
  {
    image:badge,
    title:"Badges",
    text:'3 Examples',
  },
 
];
const pagedesign7 = [
  {
    image:process,
    title:"Process Bars",
    text:'4 Example',
  },
 
];
const pagedesign8 = [
  {
    image:table,
    title:"Tables",
    text:'3 Example',
  },
 
];
const pagedesign9 = [
  {
    image:typography,
    title:"Typography",
    text:'2 Examples',
  },
 
];
function Elements() {
  return (
    <>
     <Box sx={{ margin: {lg:"1rem  -2rem",sm:'2rem 12rem',md:'1rem 0rem',xs:'1rem 2rem'} }}>
        <Grid
          container
          sx={{
            display: "flex",
            position: "relative",
            height: "auto",
            justifyContent: "center",
            flexDirection: "row",
            padding: { lg: "2rem  10rem", md: "4rem 4rem " },
          }}
        >
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            container
            direction={"column"}
          >
            <Box
              sx={{
                position: { lg: "sticky", md: "sticky" },
                
                top: '120px',
                letterSpacing: "-0.125px",
                width: { lg: "16rem", md: "14rem" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "rgb(52, 71, 103)",
                  fontFamily: '"Roboto Slab", sans-serif',
                  fontSize: "1.875rem",
                  lineHeight: "1.375",
                }}
              >
                Elements
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "rgb(123, 128, 154)",
                  paddingRight: "1rem",
                  verticalAlign: "unset",
                  textAlign: "start",
                }}
              >
                80+ carefully crafted small elements that come with multiple colors and shapes
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={9}
            md={9}
            xs={12}
            sm={12}
            sx={{ padding: " 0rem  1.2rem" }}
          >
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: "1.625",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign1.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign2.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: "1.625",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign3.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: "1.625",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign4.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign5.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign6.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign7.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign8.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {pagedesign9.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        height: {
                          lg: "8rem",
                          md: "6rem",
                          sm: "9rem",
                          xs: "6rem",
                        },
                        width: {
                          lg: "15rem",
                          md: "12rem",
                          sm: "20rem",
                          xs: "14rem",
                        },
                        paddingTop: { sm: "2rem", xs: "2rem" },
                        transformOrigin: "50% 10px",
                        cursor: "pointer",

                        transition: "transform 200ms ease-out",
                        backfaceVisibility: "hidden",
                        opacity: "1",
                        "&:hover": {
                          transform:
                            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
                        },
                        paddingBottom: "1.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <Paper
                        elevation={8}
                        sx={{ paddingBottom: "1.5rem", borderRadius: "1rem" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            WebkitBorderTopLeftRadius: "1rem",
                            WebkitBorderTopRightRadius: "1rem",
                            boxSizing: "border-box",
                            background: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          alt={item.title}
                        />
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "1rem",
                        width: "12rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Typography
                        variants="h6"
                        sx={{
                          fontSize: "1rem",
                          paddingTop:{xs:'2rem',sm:'2rem'},
                          lineHeight: "1.625",
                          color: "rgb(52, 71, 103)",
                          fontWeight: "700",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variants="body2"
                        sx={{
                          width: "12rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "rgb(123, 128, 154)",
                          fontWeight: "400",
                          letterSpacing: " -0.125px",
                        }}
                      >
                        {item.text}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Elements