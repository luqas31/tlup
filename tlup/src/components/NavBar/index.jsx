import './index.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

function NavBar() {
	const navRef = useRef();
	const showNavBar = () => {
		navRef.current.classList.add('responsive_nav');
	};

	return (
		<div>
			<header>
				<h3>LOGO</h3>
				<nav ref={navRef}>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</nav>
				<button className='nav-btn nav-close-btn' onClick={showNavBar}>
					<FaTimes />
				</button>
				<button className='nav-btn' onClick={showNavBar}>
					<FaBars />
				</button>
			</header>
		</div>
	);
}

export default NavBar;
