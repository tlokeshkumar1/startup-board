const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./server/routes/auth');
const postRoutes = require('./server/routes/post');
const blogRoutes = require('./server/routes/blog');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/blogs', blogRoutes);

const uri = "mongodb+srv://root:root@startupboard.mf8es7e.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((error) => console.log(`${error} did not connect`));
