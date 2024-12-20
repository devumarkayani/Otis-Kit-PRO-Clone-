import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import NotesIcon from "@mui/icons-material/Notes";
import { Tooltip,   } from "@mui/material";
import Pagenav from "./Pagenav";
import {makeStyles} from '@mui/styles';

import Accountnav from "./Accountnav";
import Sectionnav from "./Sectionnav";
import Docnav from "./Docnav";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  {
    icon1: <DashboardIcon fontSize="inherit" />,
    name: "Page",
    icon2: <KeyboardArrowDownIcon fontSize="inherit" />,
  },
  {
    icon1: <ContactsIcon fontSize="inherit" />,
    name: "Account",
    icon2: <KeyboardArrowDownIcon fontSize="inherit" />,
  },
  {
    icon1: <CalendarViewDayIcon fontSize="inherit" />,
    name: "Section",
    icon2: <KeyboardArrowDownIcon fontSize="inherit" />,
  },
  {
    icon1: <NotesIcon fontSize="inherit" />,
    name: "Docs",
    icon2: <KeyboardArrowDownIcon fontSize="inherit" />,
  },
];
const userStyles =makeStyles(()=>({
  customTooltip:{
    padding:'1% !important',
    maxWidth: "none !important",
    backgroundColor: "white !important",
    borderRadius: "1em !important",
    top: "1em !important",
  },
  ".MuiTooltip-arrow": {
    backgroundColor: 'white !important',
    // color: theme.palette.common.black,
  },
  
}))
function DrawerAppBar(props) {
  const navigate=useNavigate()
  const[disable,setDisable]=React.useState(false)
    const logoutuser=()=>{
      try{
        localStorage.removeItem('accessToken');
        setDisable(true)
        navigate('/login')
      }
      catch(error){
      console.error('Eroor in disable button',error)
    }}
   const classes=userStyles();
 
  const { window } = props;
 
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // const componentStyle = {
  //   backgroundImage: isSmallScreen ? 'cover':'cover'
  // };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        otis Kit PRO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
   <>
    <Box
      sx={{
        width: "99.9vw",
        display:{ lg:"flex",},
        flexDirection: "column",
        
   
      
      
      }}
    >
     
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          justifyContent: "center",
          marginTop: "1rem ",
          width: "83.61%",
          maxWidth: "1700px",
          left: "50%",
          top: "2.25%",
          transform: "translateX(-50%)",
          zIndex:'1',
          opacity: '1',
            

        height: "3.5rem",
        maxHeight: "3.7rem",
        minHeight: "3.2",
          // width: "80vw" ,
          // transform: {lg:"translateX(-12.5%)",md:"translateX(-33.5%)",sm:'translateX(-68.5%)',xs:'translateX(-240.5%)'},
          display: "flex",
          

          color: "rgb(52,71,103)",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "0.75rem",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "block", xs: "block", md: "none", lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,

              paddingLeft: "16",
              fontWeight: "700 !important",
            }}
          >
            <Button
              href="/"
              disableRipple
              sx={{
                "&:hover": { color: "inherit" },

                "&:focus": { outline: "none", boxShadow: "inherit" },
                
                color: "inherit",
                fontStyle:'roboto',
                fontWeight: "700 !important",
                fontSize: "0.8rem",
                letterSpacing: "-0.125px",
                lineHeight: "1.5",
              textTransform:'none',
                opacity: "1",
              }}
            >
              Otis Kit PRO
            </Button>
          </Box>
          <Box
            sx={{
            
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            {navItems.map((item) => (
              <Tooltip
                arrow
                key={item.name}
                classes={{tooltip:classes.customTooltip}}
                placement={item.name == "Docs" ? 'bottom-end' : "bottom-start"}
                sx={{ background:'white',  "& .MuiTooltip-arrow": {
          
                
                  backgroundColor: 'white',

              }, display:{lg:'block',md:'block',sm:'none',xs:'none'},
                  
                }}
                title={
                  item.name === "Page" ? (
                    <Pagenav />
                  ) : item.name === "Account" ? (
                    <Accountnav />
                  ) : item.name === "Section" ? (
                    <Sectionnav />
                  ) : item.name === "Docs" ? (
                    <Docnav />
                  ) : null
                }
              >
                <Button
                  variant="text"
                  key={item.name}
                  
                  disableRipple
                  sx={{
                    "&:focus": { outline: "none", boxShadow: "inherit" },

                    color:'rgba(52,71,103,0.6)',
                    background: "transparent",
                    borderColor: "none",
                    fontWeight: "400",
                    textTransform: "none",
                    paddingRight: "16px",
                  }}
                >
                  <Box sx={{ fontSize: "1.1rem" }}>{item.icon1}</Box>

                  <Box sx={{ fontSize: "0.9rem", margin: "0px 2px 0px 8px" }}>
                    {item.name}
                  </Box>

                  <Box sx={{ fontSize: "1.1rem" ,marginTop:'0.5rem' }}>{item.icon2}</Box>
                </Button>
              </Tooltip>
            ))}
          </Box>
          <Box sx={{ display:'flex',flexDirection:'row', float: "right" }}>
            <Button
              disableRipple
              variant="contained"
              size="small"
              href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
              target="_blank"
              disableElevation
              sx={{
                display: { xs: "block" },
                "&:hover": { color: "whitesmoke" },
                fontSize: ".75rem",
                fontWeight: "700",
                lineHeight: "1.625",
                letterSpacing: ".000935rem",
                height: "1.4",
                verticalAlign:'middle',
                textDecoration: "none",
                padding: "0.375rem 1rem",
                marginLeft: ".3rem",
                minWidth:'4rem',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                borderRadius: ".5rem",
              }}
            >
              BUY NOW
            </Button>
            <Button
              disableRipple
                variant="contained"
              size="small"
              disabled={disable}
              onClick={logoutuser}
              // target="_blank"
              
              sx={{
                display: { xs: "block" },
                "&:hover": { color: "whitesmoke" },
                fontSize: ".75rem",
                fontWeight: "700",
                lineHeight: "1.625",
                letterSpacing: ".000935rem",
                height: "1.4",
                verticalAlign:'middle',
                textDecoration: "none",
                padding: "0.375rem 1rem",
                marginLeft: ".3rem",
                minWidth:'4rem',
                backgroundImage: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                borderRadius: ".5rem",
              }}
            >
              Logout User
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
