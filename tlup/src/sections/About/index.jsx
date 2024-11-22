import React from 'react';
import './index.css';
import useFetchData from '../../hooks/useFetchData';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function About() {
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

	const about = data.about[0];

	return (
		<>
			<section id='about' className='about-section reveal-section'>
				<div className='section-bg'>
					<div className='section-title'>
						<h2>{about.title}</h2>
					</div>
					<div className='section-content'>
						<div className='about-image'>
							<img src={about.image} alt='' />
						</div>
						<div className='about-text'>
							{about.questions.map((questionItem, index) => (
								<div className='about-question' key={index}>
									<h3>{questionItem.question}</h3>
									<p>{questionItem.answer}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
