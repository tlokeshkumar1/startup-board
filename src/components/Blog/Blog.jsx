import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../../api';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await fetchBlogs();
      setBlogs(data);
    };

    getBlogs();
  }, []);

  return (
    <Container className="blog-container">
      <Typography variant="h4" gutterBottom>
        Start-Up Ecosystem Blog
      </Typography>
      <List className="blog-list">
        {blogs.map((blog) => (
          <ListItem button key={blog._id} onClick={() => navigate(`/blog/${blog._id}`)} className="blog-list-item">
            <ListItemText primary={blog.title} secondary={blog.author} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Blog;
