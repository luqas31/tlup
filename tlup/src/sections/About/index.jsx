import React from 'react';
import './index.css';

function About() {
	return (
		<>
			<section id='about' className='about-section'>
				<div className='section-bg'>
					<div className='section-title'>
						<h2>sobre nós</h2>
					</div>
					<div className='section-content'>
						<div className='about-image'>
							<img src='/images/tlup-about.png' alt='' />
						</div>
						<div className='about-text'>
							<div className='about-question'>
								<h3>O que fazemos?</h3>
								<p>Tiralaumapic é uma empresa de Produção Audiovisual, especializada em Pré-produção, Produção e Pós-produção, com um toque criativo e dinâmico</p>
							</div>
							<div className='about-question'>
								<h3>Como fazemos?</h3>
								<p>
									Com dedicação e entusiasmo, seguimos uma abordagem colaborativa e prática. Do processo de pré-produção até à entrega final, auxiliamos os nossos clientes a comunicar a sua mensagem
									de maneira ainda mais clara e eficaz.
								</p>
							</div>
							<div className='about-question'>
								<h3>Porque é que o fazemos?</h3>
								<p>
									O nosso objetivo é produzir vídeos de qualidade que tirem o máximo proveito do meio, seja apresentando ideias complexas de forma simples ou ajudando os clientes a cativar o público
									através de narrativas criativas.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
