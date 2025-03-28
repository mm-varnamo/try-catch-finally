import 'dotenv/config';
import express from 'express';
import BlogPostsRouter from './routes/blog-posts';
import UsersRouter from './routes/users';
import cors from 'cors';
import env from './env';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler';
import createHttpError from 'http-errors';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(
	cors({
		origin: env.WEBSITE_URL,
	})
);
app.use('/uploads/featured-images', express.static('uploads/featured-images'));

app.use('/posts', BlogPostsRouter);
app.use('/users', UsersRouter);

app.use((req, res, next) => next(createHttpError(404, 'Endpoint not found')));

app.use(errorHandler);

export default app;
