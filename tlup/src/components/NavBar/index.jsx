import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 834);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 834);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='menu-container'>
			<header>
				<NavLink to='/' className='hero-logo'>
					<img src='./images/tlup-logo.png' alt='' />
				</NavLink>

				{!isDesktop && (
					<div className='hamburger-menu-container'>
						<div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<nav className={`menu ${isOpen ? 'open' : ''}`}>
							<ul>
								<li>
									<NavLink to='/'>TLUP</NavLink>
								</li>
								<li>
									<a href='#about'>Sobre nós</a>
								</li>
								<li>
									<NavLink to='/portfolio'>Portfólio</NavLink>
								</li>
								<li>
									<a href='#contact'>Fala connosco</a>
								</li>
							</ul>
						</nav>
					</div>
				)}

				{isDesktop && (
					<nav className='desktop-menu'>
						<ul>
							<li>
								<NavLink to='/'>TLUP</NavLink>
							</li>
							<li>
								<a href='#about'>Sobre nós</a>
							</li>
							<li>
								<NavLink to='/portfolio'>Portfólio</NavLink>
							</li>
							<li>
								<a href='#contact'>Fala connosco</a>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</div>
	);
}
export default Header;
