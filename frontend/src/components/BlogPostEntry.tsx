import { BlogPost } from '@/models/blog-post';
import { formatDate } from '@/utils/utils';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

interface BlogPostEntryProps {
	post: BlogPost;
	className?: string;
}

const BlogPostEntry = ({
	post: { slug, title, summary, createdAt },
	className,
}: BlogPostEntryProps) => {
	const postLink = '/blog/' + slug;

	return (
		<Card className={className}>
			<article>
				<Card.Body>
					<Card.Title>
						<Link href={postLink}>{title}</Link>
					</Card.Title>
					<Card.Text>{summary}</Card.Text>
					<Card.Text className='text-muted msall'>
						<time dateTime={createdAt}>{formatDate(createdAt)}</time>
					</Card.Text>
				</Card.Body>
			</article>
		</Card>
	);
};

export default BlogPostEntry;
