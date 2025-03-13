import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import logo from '@/assets/images/try-catch-finally-logo.svg';
import Image from 'next/image';

const NavBar = () => {
	const router = useRouter();

	return (
		<Navbar expand='md' collapseOnSelect variant='dark' bg='body' sticky='top'>
			<Container>
				<Navbar.Brand as={Link} href='/' className='d-flex gap-1'>
					<Image src={logo} alt='Try Catch Finally Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='main-navbar' />
				<Navbar.Collapse id='main-navbar'>
					<Nav>
						<Nav.Link as={Link} href='/' active={router.pathname === '/'}>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							href='/blog'
							active={router.pathname === '/blog'}
						>
							Articles
						</Nav.Link>
					</Nav>
					<Nav className='ms-auto'>
						<Nav.Link
							as={Link}
							href='/blog/new-post'
							className='link-primary d-flex align-items-center gap-1'
						>
							<FiEdit />
							Create post
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
