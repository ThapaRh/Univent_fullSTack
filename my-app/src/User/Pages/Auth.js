import React, { Component, useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import logo from "../Login/Arlington.jpeg";
import "../Login/logo.css";
import "../Pages/Auth.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();


function Auth() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError]= useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange=(e)=>{
    setSuccessMessage('');
    setEmailError('');
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setSuccessMessage('');
    setPasswordError('');
    setPassword(e.target.value);
  }
  async function submit(e) {
    e.preventDefault();
    let response;
    if(email!==''){
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(emailRegex.test(email)){
        setEmailError('');
      }
      else{
        setEmailError('Invalid Email');
      }
    }
    else{
      setEmailError('Email Required!');
    }
    if(password!==''){

    }
    else{
      setPasswordError('Password Required!')
    }

    
    try {
      response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    const responseData = await response.json();
    auth.login(responseData.userId, responseData.token);
    navigate("/");
    console.log(responseData);

    // if(email!==''){
    //   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //   if(emailRegex.test(email)){
    //     setEmailError('');
    //   }
    //   else{
    //     setEmailError('Invalid Email');
    //   }
    // }
    // else{
    //   setEmailError('Email Required!');
    // }
    // if(password!==''){

    // }
    // else{
    //   setPasswordError('Password Required!')
    // }

   
  }

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              onChange={handleEmailChange} 
              value={email}
            />
            {emailError&&<div className="error-msg">{emailError}</div>}
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              onChange={handlePasswordChange}
              value={password}
            />
            {passwordError&&<div className="error-msg">{passwordError}</div>}
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Auth;
