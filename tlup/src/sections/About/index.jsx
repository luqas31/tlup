import React from 'react';
import './index.css';
import useFetchData from '../../hooks/useFetchData';

function About() {
	const { data, loading, error } = useFetchData();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const about = data.about[0];

	return (
		<>
			<section id='about' className='about-section'>
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
