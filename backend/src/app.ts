import 'dotenv/config';
import express from 'express';
import BlogPostsRouter from './routes/blog-posts';
import cors from 'cors';
import env from './env';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(
	cors({
		origin: env.WEBSITE_URL,
	})
);

app.use('/posts', BlogPostsRouter);

export default app;
