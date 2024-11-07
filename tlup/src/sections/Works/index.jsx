import React from 'react';
import './index.css';
import Button from '../../components/Portfolio-Button';
import useFetchData from '../../hooks/useFetchData';

function Works() {
	const { data, loading, error } = useFetchData();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const works = data.works[0];

	return (
		<>
			<section id='works' className='works-section'>
				<div className='section-bg'>
					<div className='section-title'>
						<h2>{works.title}</h2>
					</div>
					<div className='section-content button-pos'>
						<Button />
					</div>
				</div>
			</section>
		</>
	);
}

export default Works;
