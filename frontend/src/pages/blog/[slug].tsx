import { BlogPost } from '@/models/blog-post';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as BlogApi from '@/network/api/blog';

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await BlogApi.getAllBlogPostSlugs();

	const paths = slugs.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
	params,
}) => {
	const slug = params?.slug?.toString();
	if (!slug) throw Error('slug missing');

	const post = await BlogApi.getBlogPostBySlug(slug);

	if (post === undefined) {
		throw Error('post undefined');
	}

	return { props: { post } };
};

interface BlogPostPageProps {
	post: BlogPost;
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
	return <div>{JSON.stringify(post)}</div>;
};

export default BlogPostPage;
