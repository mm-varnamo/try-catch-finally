import 'dotenv/config';
import express from 'express';
import BlogPostsRouter from './routes/blog-posts';

const app = express();

app.use(express.json());

app.use('/posts', BlogPostsRouter);

export default app;
