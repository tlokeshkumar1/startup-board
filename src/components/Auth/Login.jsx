import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../api';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token);
      navigate('/board');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="auth-box">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField variant="outlined" margin="normal" required fullWidth label="Email" name="email" autoComplete="email" autoFocus value={formData.email} onChange={handleChange} />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Box className="center-link">
          <Link to="/register">Register</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
