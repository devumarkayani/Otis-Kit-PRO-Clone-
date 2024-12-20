// import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import {toast} from 'react-toastify'
// import Spanner from "../components/Spanner";
import axios from 'axios'

function Signin() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
try{const response = await axios.post("http://localhost:9000/api/users/login"||process.env.POST_URL, { email, password });
console.log(response.data)
localStorage.setItem('accessToken',response.data.token);
navigate('/')
alert('Login sucessfully:')
}catch(error){
  console.error("Authentication Failed :",error)
}
  };
  return (
     <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3">Login </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              margin: "2rem 15rem",
            }}
          >
            <TextField
              variant="outlined"
              label="Enter the Email:"
              value={email}
              sx={{ padding: "0.5rem 0rem" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Enter the Password:"
              type="password"
              value={password}
              sx={{ padding: "0.5rem 0rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default Signin



