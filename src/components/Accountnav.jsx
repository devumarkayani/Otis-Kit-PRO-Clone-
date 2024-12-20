import { Box, Button, Tooltip, Typography} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Resetpassword from "./Resetpassword";
import{ makeStyles} from "@mui/styles";
import { Link } from "react-router-dom";


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
    name: "Sign In",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    link:'/login'
  },

  {
    name: "Sign Up",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    link:'/register'
  },

  {
    name: "Reset Password",
    icon: <KeyboardArrowRightIcon fontSize="inherit" />,
    link:'/login/reset'
  },
];
function Accountnav() {

   const classes = userStyles();
  return (
    <>
      <Box
        sx={{
          width: "18vw",
          minWidth: "12rem",
          height: "13vh",
          display: "flex ",
          padding: "1rem 0",
          borderRadius: "0.375rem",
          flexDirection: "column",
          textAlign: "center",
          justifyItems: "space-between",
        }}
      >
        {navItems.map((item) => (
          <Tooltip
            arrow
            key={item.name}
            classes={{tooltip:classes.customTooltip}}
            placement={"right-start"}
            sx={{
              
              justifyContent:'space-between',
              borderRadius: "0.375rem",
              background: "white",
              "& .MuiTooltip-arrow": {
  
                bgcolor: "white",
              },
            }}
          //   title={
          //     item.name === "Sign In" ? (
          //         <Signin/>
          //     ) : item.name === "Sign Up" ? (
          //       <Signup />
          //     ) : item.name === "Reset Password" ? (
          //       <Resetpassword />
          //     ) : null
          //   }
          >
            <Button
              variant="text"
              key={item.name}
              disableRipple
              size="small"
              target="_blank"
              sx={{
                height: "1.7rem",
                "&:focus": { outline: "none", boxShadow: "inherit" },
                "&:hover": {
                  color: "rgba(52,71,103,0.99)",
                },
                display: "flex",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                flexDirection: "row",
                justifyContent: "space-between",
                textTransform: "none",
                // paddingRight: "16px",
                backgroundColor: "inherit",

                color: "rgb(123, 128, 154)",
              }}
            >
              <Box sx={{ fontSize: "0.9rem", fontWeight: "400" }}>
                <a style={{color: "rgb(123, 128, 154)"}} href={item.link}>{item.name}</a>
                {/* <Link to='/login'>Sign in</Link> */}
              </Box>
              <Box sx={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {item.icon}
              </Box>
            </Button>
          </Tooltip>
        ))}
      </Box>
    </>
  );
}

export default Accountnav;
