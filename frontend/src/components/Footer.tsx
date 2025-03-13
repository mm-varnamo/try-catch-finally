import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<p>&#169; {new Date().getFullYear()} TryCatchFinally</p>
				<ul>
					<li>
						<Link href='/privacy'>Privacy</Link>
					</li>
					<li>
						<Link href='/imprint'>Imprint</Link>
					</li>
				</ul>
			</Container>
		</footer>
	);
};

export default Footer;
