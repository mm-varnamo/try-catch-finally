import { RequestHandler } from 'express';
import BlogPostModel from '../models/blog-post';
import assertIsDefined from '../utils/assertIsDefined';
import mongoose from 'mongoose';
import sharp from 'sharp';
import env from '../env';

export const getBlogPosts: RequestHandler = async (req, res, next) => {
	try {
		const allBlogPosts = await BlogPostModel.find().sort({ _id: -1 }).exec();

		res.status(200).json(allBlogPosts);
	} catch (error) {
		res.status(500).json({ error });
	}
};

interface BlogPostBody {
	slug: string;
	title: string;
	summary: string;
	body: string;
}

export const createBlogPost: RequestHandler<
	unknown,
	unknown,
	BlogPostBody,
	unknown
> = async (req, res, next) => {
	const { slug, title, summary, body } = req.body;
	const featuredImage = req.file;

	try {
		assertIsDefined(featuredImage);

		const blogPostId = new mongoose.Types.ObjectId();

		const featuredImageDestiationPath =
			'/uploads/featured-images/' + blogPostId + '.png';

		await sharp(featuredImage.buffer)
			.resize(700, 450)
			.toFile('./' + featuredImageDestiationPath);

		const newPost = await BlogPostModel.create({
			_id: blogPostId,
			slug,
			title,
			summary,
			body,
			featuredImageUrl: env.SERVER_URL + featuredImageDestiationPath,
		});

		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ error });
	}
};
