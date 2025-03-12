import Head from 'next/head';
import { Button } from 'react-bootstrap';

const blog = () => {
	return (
		<>
			<Head>
				<title>Articles - TryCatchFinally</title>
				<meta
					name='description'
					content='Read the latest posts on TryCatchFinally'
				/>
			</Head>
			<div>
				<div>blog</div>
				<div>
					<Button>I am a button</Button>
				</div>
				<div>
					<a href='#'>I am a link</a>
				</div>
			</div>
		</>
	);
};

export default blog;
