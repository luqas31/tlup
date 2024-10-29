import './index.css';

function About() {
	return (
		<>
			<div className='about-bg'>
				<div className='about-title'>
					<h1>sobre nós</h1>
				</div>
				<div className='about-content'>
					<div className='about-question'>
						<h2>O que fazemos?</h2>
						<p>Tiralaumapic é uma empresa de Produção Audiovisual, especializada em Pré-produção, Produção e Pós-produção, com um toque criativo e dinâmico</p>
					</div>
					<div className='about-question'>
						<h2>Como fazemos?</h2>
						<p>
							Com dedicação e entusiasmo, seguimos uma abordagem colaborativa e prática. Do processo de pré-produção até à entrega final, auxiliamos os nossos clientes a comunicar a sua mensagem de
							maneira ainda mais clara e eficaz.
						</p>
					</div>
					<div className='about-question'>
						<h2>Porque é que o fazemos?</h2>
						<p>
							O nosso objetivo é produzir vídeos de qualidade que tirem o máximo proveito do meio, seja apresentando ideias complexas de forma simples ou ajudando os clientes a cativar o público
							através de narrativas criativas.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
