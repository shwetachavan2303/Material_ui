import React, { useState } from 'react';
import './App.css'
import { TextField, Button, Grid, Box, Typography, MenuItem } from '@mui/material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    interest: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  return (
    <Box mt={0} className="formContainer"  sx={{ border: '2px solid grey',
                                                 padding: '20px', 
                                                 borderRadius: '10px', 
                                                 maxWidth: '600px', 
                                                 margin: 'auto', 
                                                 boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                                                  
      <Typography variant="h4" sx={{ marginTop: '-60px', 
                                    paddingTop: '10px', 
                                    fontSize: '30px', 
                                    color: 'black', 
                                    background: "-webkit-image-set('https://wallpapers.com/images/featured-full/colorful-pictures-2kvc3wot07s3e4ym.jpg')",
                                    backgroundPosition: 'center', 
                                    WebkitBackgroundClip: 'text', 
                                    WebkitTextFillColor: 'transparent' }}>
        <center><h1 id='aa'>Registration Form</h1></center>
      </Typography>

      <center>
        <form onSubmit={handleSubmit} className="Form1">
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Name:</Typography>
              <TextField
                id="fullName"
                label="Enter Your Full Name"
                name="fullName"
                variant="outlined"
                value={formData.fullName}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Email id:</Typography>
              <TextField
                id="email"
                label="enter Email ID"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Mobile No:</Typography>
              <TextField
                id="mobileNo"
                label="Enter Mobile No."
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Interest:</Typography>
              <TextField
                select
                label="Choose Interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              >
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="music">Music</MenuItem>
                <MenuItem value="movies">Movies</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Date of Birth:</Typography>
              <TextField
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Password:</Typography>
              <TextField
                label="Enter Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginRight: '10px', alignSelf: 'center' }}>Confirm Password:</Typography>
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                sx={{ width: 'calc(100% - 100px)', marginBottom: '16px' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </center>
    </Box>
  );
}

export default RegistrationForm;
