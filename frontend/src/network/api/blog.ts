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
	featuredImage: File;
}

export const createBlogPost = async (input: CreateBlogPostFormValues) => {
	try {
		const formData = new FormData();
		Object.entries(input).forEach(([key, value]) => {
			formData.append(key, value);
		});

		const response = await api.post<BlogPost>('/posts', formData);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
