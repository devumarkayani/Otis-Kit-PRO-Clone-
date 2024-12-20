
import {BrowserRouter as Routers,Route ,Routes, useNavigate, redirect} from 'react-router-dom'
import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'
// import About from './pages/About'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Resetpassword from './components/Resetpassword'
import { Box } from '@mui/material'
import { useEffect } from 'react';
import ProtectedRoute from './middleware/ProtectedRoute';
function Router() {
  const navigate=useNavigate;
  
//  
  return (
    <>
      <Routers>
        <Box>
          <Routes>
            {/* <Route exact path="/" element={<ProtectedRoute Component={Home} />} /> */}
            <Route path='/' element={<Home/>}/>
            
            {/* <Route path="/login" element={<Signin />} /> */}

            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/menu" element={<Menu />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/*" element={<Pagenotfound />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/login/reset" element={<Resetpassword />} />
          </Routes>
        </Box>
      </Routers>
    </>
  );
}







export default Router