import { Row, Col } from 'react-bootstrap';
import BlogPostEntry from './BlogPostEntry';
import { BlogPost } from '@/models/blog-post';
import styles from '@/styles/BlogPostsGrid.module.css';

interface BlogPostGridProps {
	posts: BlogPost[];
}

const BlogPostsGrid = ({ posts }: BlogPostGridProps) => {
	return (
		<Row xs={1} sm={2} lg={3} className='g-4'>
			{posts.map((post) => (
				<Col key={post._id}>
					<BlogPostEntry post={post} className={styles.entry} />
				</Col>
			))}
		</Row>
	);
};

export default BlogPostsGrid;
