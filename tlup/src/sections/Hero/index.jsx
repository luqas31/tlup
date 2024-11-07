import React from 'react';
import './index.css';
import useFetchData from '../../hooks/useFetchData';
import Button from '../../components/Portfolio-Button';

function Hero() {
	const { data, loading, error } = useFetchData();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const hero = data.hero[0];

	return (
		<>
			<section id='hero' className='hero'>
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
