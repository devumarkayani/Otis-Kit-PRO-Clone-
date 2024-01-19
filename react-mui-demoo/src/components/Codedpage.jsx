import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Codedpage() {
  return (
    <>
    <Box
        sx={{
            height:'auto',
            width:{lg:'28rem',md:'28rem',sm:'28rem',xs:'22rem'},
          marginTop: "5rem",
          textAlign: "center",
          justifyContent:'center',
          display: "flex",
        //   marginRight: "3rem",
        //   marginLeft: "3rem",
          marginBottom:'2rem',
          flexDirection: "column",
          padding: {
            lg: "1rem 26rem",
            md: "1rem 15rem",
            sm: "1rem 8rem",
            xs: "1rem  0rem",
          },
        }}
      >
        <Stack
          sx={{
            justifyContent:'center',
            padding: {
              lg: "1rem 9rem",
              md: "1rem 8rem",
              sm: "1rem 8rem",
              xs: "1rem  2rem",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
                
                verticalAlign:"middle",
              fontSize: "0.75rem",
            lineHeight:'2',
              fontWeight: "700",
              backgroundColor: "rgb(174, 206, 247)",
                textTransform:'uppercase',
              color: "rgb(9, 91, 198)",
              borderRadius: "0.5rem",
            }}
          >
            Boost Creativity
          </Typography>
        </Stack>
        <Box  >
          <Typography
            variant="h4"

            sx={{
                //   marginRight:'0rem',
                
                color:'rgb(52, 71, 103)',
              fontWeight: "700",
              fontFamily: '"Roboto Slab", sans-serif',
            }}
          >
           With our coded pages
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
          The easiest way to get started is to use one of our
pre-built example pages.
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Codedpage