import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogs } from '../../api';
import { Container, Typography } from '@mui/material';
import './Blog.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await fetchBlogs();
      const foundBlog = data.find((blog) => blog._id === id);
      setBlog(foundBlog);
    };

    getBlog();
  }, [id]);

  if (!blog) return null;

  return (
    <Container className="blog-post">
      <Typography variant="h4" className="blog-post-title" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="body2" className="blog-post-author" gutterBottom>
        {blog.author}
      </Typography>
      <Typography variant="body1" className="blog-post-content">
        {blog.content}
      </Typography>
    </Container>
  );
};

export default BlogPost;
