import { Box, Grid, Paper, Typography } from "@mui/material";
import image from "../images/design1.jpg";
import features from '../images/features.jpg'
import pricing from '../images/pricing.jpg'
import faq from '../images/faq.jpg'
import teams from '../images/teams.jpg'
import call from '../images/calltoaction.jpg'
import application from '../images/application.jpg'
import stats  from '../images/stats.jpg'
import testimonials from '../images/testimonials.jpg'
import logoarea from '../images/logo-area.jpg'
import footer from '../images/footers.jpg'
import contentsection from '../images/content-sections.jpg'
import  generalcard  from '../images/general-cards.jpg'
import blogpost from '../images/blogs.jpg'
import { Link } from "react-router-dom"; 
const pagedesign = [
  {  
    image: image,
    title: "Page Headers",
    text: "10 Examples",
  },
 
];
const pagedesign1 = [
  {
    image:features,
    title:"Features",
    text:'14 Examples',
  },
 
];
const pagedesign2 = [
  {
    image:pricing,
    title:"Pricing",
    text:'8 Examples',
  },
 
];
const pagedesign3 = [
  {
    image:faq,
    title:"FAQ",
    text:'1 Examples',
  },
 
];
const pagedesign4 = [
  {
    image:blogpost,
    title:"Blogs Posts",
    text:'11 Examples',
  },
 
];
const pagedesign5 = [
  {
    image:testimonials,
    title:"Testimonials",
    text:'11 Examples',
  },
 
];
const pagedesign6 = [
  {
    image:teams,
    title:"Teams",
    text:'6 Examples',
  },
 
];
const pagedesign7 = [
  {
    image:stats,
    title:"Stats",
    text:'3 Example',
  },
 
];
const pagedesign8 = [
  {
    image:call,
    title:"Call to Actions",
    text:'8 Example',
  },
 
];
const pagedesign9 = [
  {
    image:application,
    title:"Applications",
    text:'6 Examples',
  },
 
];
const pagedesign10 = [
  {
    image:logoarea,
    title:"Logo Areas",
    text:'4 Example',
  },
 
];
const pagedesign11 = [
  {
    image:footer,
    title:"Footers",
    text:'10 Example',
  },
 
];
const pagedesign12 = [
  {
    image:generalcard,
    title:"General Cards",
    text:'9 Examples',
  },
 
];
const pagedesign13 = [
  {
    image:contentsection,
    title:"Content Sections",
    text:'8 Examples',
  },
 
];

function Designblock() {
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
                Design Blocks
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
                A selection of 45 page sections that fit perfectly in any
                combination
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
                          fontSize: "1rem",
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
                          fontSize: "1rem",
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
                          lineHeight: "1.625",
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                {pagedesign10.map((item) => (
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                {pagedesign11.map((item) => (
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
                          fontSize: "1rem",
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
                {pagedesign12.map((item) => (
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
                {pagedesign13.map((item) => (
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
                          paddingTop:{xs:'1.5rem',sm:'1.5rem'},
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
  );
}

export default Designblock;
