import { BlogPost } from '@/models/blog-post';
import api from '@/network/axiosInstance';

interface CreateBlogPostFormValues {
	slug: string;
	title: string;
	summary: string;
	body: string;
}

export async function createBlogPost(input: CreateBlogPostFormValues) {
	try {
		const response = await api.post<BlogPost>('/posts', input);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
