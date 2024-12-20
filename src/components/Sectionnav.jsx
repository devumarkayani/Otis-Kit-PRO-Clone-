import { Box, Button, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
    name: "Page Sections",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    title: "see all 55sections",
  },

  {
    name: "Navigation",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    title: "see all 3navigation",
  },

  {
    name: "Input Areas",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    title: "see all 8input areas",
  },
  {
    name: "Attention Catchers",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    title: "see all 5example",
  },
  {
    name: "Elements",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    title: "see all 32example",
  },
];

function Sectionnav() {
  const classes = userStyles();
  return (
    <>
      <Box
        sx={{
          width: "20vw",
          minWidth: "12rem",
          height: "50vh",
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
                marginLeft: "4%",

                display: "flex",
                width: "17vw",
                flexDirection: "column",
                alignItems: "flex-start",
                textTransform: "none",

                // justifyContent:'space-between',
                // paddingRight: "16px",
                backgroundColor: "inherit",

                color: "black",
              }}
            >
              <Grid container>
                <Grid item lg={8}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box
                      sx={{
                        
                        fontSize: "0.9rem",
                        
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      color: "rgba(52,71,103,0.8)",
                      fontSize: "1rem",
                      fontWeight: "300",
                    }}
                  >
                    {item.title}
                  </Box>
                </Grid>
                <Grid item lg={4}>
                  <Box
                    sx={{
                      float: "right",
                      display: "flex",
                      flexDirection: "row-reverse",
                      fontSize: "1.1rem",
                      marginTop:'1rem'
                    }}
                  >
                    {item.icon}
                  </Box>
                </Grid>
              </Grid>
            </Button>
          </Tooltip>
        ))}
      </Box>
    </>
  );
}

export default Sectionnav;
