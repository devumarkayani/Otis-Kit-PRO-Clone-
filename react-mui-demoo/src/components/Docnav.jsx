import { Box, Button, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const userStyles = makeStyles(() => ({
  customTooltip: {
    padding: "1% !important",
    maxWidth: "none !important",
    backgroundColor: "white !important",
    borderRadius: "1em !important",
    top: "1em !important",
  },
  ".MuiTooltip-arrow": {
    backgroundColor: "white !important",
    // color: theme.palette.common.black,
  },
}));

const navItems = [
  {
    name: "Gettting Started",
    
    title: "All about overview,quick start,licence and contents",
  },
  {
    name: "Foundation",
    
    title: "See our colors,icons and typography",
  },
  {
    name: "Components",
    
    title: "Explore our collection of fully designed  components ",
  },
  {
    name: "Plugins",
    
    title: "Check how you can integrate our plugins",
  },

];


function Docnav() {
  const classes = userStyles();
  return (
    <>
      <Box
        sx={{
          width: "25rem",
          minWidth: "14rem",
          height: "40vh",
          display: "flex ",
          
          padding: "1rem 0",
          borderRadius: "0.375rem",
          flexDirection: "column",
        }}
      >
        {navItems.map((item) => (
          <Tooltip
            arrow
            key={item.name}
            classes={{ tooltip: classes.customTooltip }}
            placement={"bottom-start"}
            sx={{
              borderRadius: "0.375rem",
              background: "white",

              "& .MuiTooltip-arrow": {
                backgroundColor: "white",
              },
            }}
            title={
              item.name === "Page Sections"
                ? console.log("Hellow")
                : item.name === "Navigation"
                ? console.log("Hellow")
                : item.name === "Input Areas"
                ? console.log("Hellow")
                : item.name === "Attention Catchers"
                ? console.log("Hellow")
                : item.name === "Elements"
                ? console.log("Hellow")
                : null
            }
          >
            <Button
              variant="text"
              key={item.name}
              size="medium"
              disableRipple
              sx={{
                "&:hover": {
                  color: "black",
                },
               

                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                textTransform: "none",
                margin:'0 2rem',
                // justifyContent:'space-between',
                // paddingRight: "16px",
                backgroundColor: "inherit",

                color: "black",
              }}
            >
              <Grid container>
                <Grid item lg={12} >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box
                      sx={{
                        
                        fontSize: "0.9rem",
                        color:'rgba(52,71,103,0.85)',
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Box>
                  </Box>

                  <Box
                    sx={{  display:'flex',flexDirection:'row', justifyContent:'flex-start',
                      color: "rgba(52,71,103,0.8)",
                      fontSize: "0.8rem",
                      fontWeight: "300",
                    }}
                  >
                    {item.title}
                  </Box>
                </Grid>
                
              </Grid>
            </Button>
          </Tooltip>
        ))}
      </Box>
    </>)
}

export default Docnav