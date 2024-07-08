import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api';
import { Button, TextField, Container, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', userType: 'investor' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="auth-box">
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField variant="outlined" margin="normal" required fullWidth label="Name" name="name" autoComplete="name" autoFocus value={formData.name} onChange={handleChange} />
          <TextField variant="outlined" margin="normal" required fullWidth label="Email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
          <FormControl fullWidth margin="normal">
            <InputLabel>User Type</InputLabel>
            <Select name="userType" value={formData.userType} onChange={handleChange}>
              <MenuItem value="investor">Investor</MenuItem>
              <MenuItem value="founder">Founder</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Box className="auth-link-box">
          <Typography>Already have an account?</Typography>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
