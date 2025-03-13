import { BlogPost } from '@/models/blog-post';
import api from '@/network/axiosInstance';

export const getBlogPosts = async () => {
	try {
		const response = await api.get<BlogPost[]>('/posts');
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

interface CreateBlogPostFormValues {
	slug: string;
	title: string;
	summary: string;
	body: string;
}

export const createBlogPost = async (input: CreateBlogPostFormValues) => {
	try {
		const response = await api.post<BlogPost>('/posts', input);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
