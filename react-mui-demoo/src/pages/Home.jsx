
import './home.css'
import { Box } from '@mui/material';

import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Pagecontent from "../pages/Pagecontent1";


const Home=()=> {


  return (
    <>
      <Box>
        
        <Navbar />

        <Homepage />
        <Pagecontent />
      </Box>
    </>
  );
}

export default Home