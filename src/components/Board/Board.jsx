import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost } from '../../api';
import { Container, Typography, TextField, Button, Box, List, ListItem } from '@mui/material'; // Remove ListItemText import
import Post from './Post';
import './Board.css';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createPost(newPost);
      setPosts([...posts, data]);
      setNewPost({ title: '', content: '' });
    } catch (error) {
      console.error('Post creation error', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Start-Up Board
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="create-post-form">
        <TextField name="title" label="Title" fullWidth value={newPost.title} onChange={handleChange} required />
        <TextField name="content" label="Content" fullWidth multiline rows={4} value={newPost.content} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </Box>
      <List>
        {posts.map((post) => (
          <ListItem key={post._id}>
            <Post post={post} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Board;
