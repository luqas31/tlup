import React from 'react';
import './index.css';
import Button from '../../components/Portfolio-Button';
import useFetchData from '../../hooks/useFetchData';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Works() {
useEffect(() => {
	// Reseta manualmente os estilos ao carregar a página
	document.querySelectorAll('.reveal-section').forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(50px)';
	});

	// Configuração do ScrollReveal
	const revealConfig = {
		origin: 'bottom',
		distance: '50px',
		duration: 1000,
		delay: 200,
		reset: true, // Apenas na primeira vez que aparece na viewport
	};

	ScrollReveal().reveal('.reveal-section', revealConfig);
}, []);
	const { data, loading, error } = useFetchData();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const works = data.works[0];

	return (
		<>
			<section id='works' className='works-section reveal-section'>
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
