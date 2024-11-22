import React from 'react';
import './index.css';
import useFetchData from '../../hooks/useFetchData';
import { useEffect } from 'react';
import Button from '../../components/Portfolio-Button';
import ScrollReveal from 'scrollreveal';

function Hero() {
	useEffect(() => {
		const revealConfig = {
			origin: 'bottom',
			distance: '50px',
			duration: 1000,
			delay: 200,
			reset: true,
		};

		ScrollReveal().reveal('.reveal-section', revealConfig);
	}, []);

	const { data, loading, error } = useFetchData();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const hero = data.hero[0];

	return (
		<>
			<section id='hero' className='hero reveal-section'>
				<div className='hero-bg'>
					<div className='hero-title'>
						<h1>"{hero.title}"</h1>
						<Button />
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
