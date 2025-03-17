import { BlogPost } from '@/models/blog-post';
import { formatDate } from '@/utils/utils';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

interface BlogPostEntryProps {
	post: BlogPost;
	className?: string;
}

const BlogPostEntry = ({
	post: { slug, title, summary, featuredImageUrl, createdAt },
	className,
}: BlogPostEntryProps) => {
	const postLink = '/blog/' + slug;

	return (
		<Card className={className}>
			<article>
				<Link href={postLink}>
					<Image
						src={featuredImageUrl}
						alt='Blog post featured image'
						width={550}
						height={200}
						className='card-img-top object-fit-cover'
					/>
				</Link>
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
