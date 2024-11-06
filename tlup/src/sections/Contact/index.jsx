import React from 'react';
import './index.css';

function Contact() {
	return (
		<>
			<section className='works-section'>
				<div className='section-bg'>
					<div className='section-title'>
						<h2>vem trabalhar connosco</h2>
					</div>
					<div className='section-content '>
						<div className='contact-content'>
							<div className='contact-name-email'>
								<div className='input-container contact-name'>
									<input type='text' placeholder=' ' />
									<label>Nome</label>
								</div>
								<div className='input-container contact-subject'>
									<input type='text' placeholder=' ' />
									<label>Assunto</label>
								</div>
							</div>
							<div className='input-container contact-email'>
								<input type='email' placeholder=' ' />
								<label>O teu endereço de email</label>
							</div>
							<div className='input-container textarea-container contact-message'>
								<textarea placeholder=' '></textarea>
								<label>A tua mensagem</label>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
