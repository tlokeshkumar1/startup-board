import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'; // Import MUI Container for layout
import Navbar from './components/Navbar'; // Import Navbar component
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Board from './components/Board/Board';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import './App.css';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Navbar /> {/* Include Navbar component */}
      <Container maxWidth="md"> {/* Use Container for content */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board" element={token ? <Board /> : <Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
