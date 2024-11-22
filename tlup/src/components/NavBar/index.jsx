import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 834);
	const [isHeroSection, setIsHeroSection] = useState(true);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 834);
		};

		const handleScroll = () => {
			const heroSection = document.getElementById('hero');
			const heroHeight = heroSection ? heroSection.offsetHeight : 0;
			setIsHeroSection(window.scrollY < heroHeight);
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`menu-container ${isHeroSection && !isOpen ? 'transparent' : ''}`}>
			<header className={`${isHeroSection && !isOpen ? 'transparent' : ''} ${isOpen ? 'menu-open' : ''}`}>
				<NavLink to='/' className='hero-logo'>
					<img src='/images/tlup-logo.png' alt='' />
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
									<a href='#hero'>TLUP</a>
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
								<a href='#hero'>TLUP</a>
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
