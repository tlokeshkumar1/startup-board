import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Board.css';

const Post = ({ post }) => {
  return (
    <Card className="post-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - {post.user.name} ({post.user.userType})
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
