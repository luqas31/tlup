import './index.css';

function Contact() {
	return (
		<div>
			<section className='contact'>
				<div className='contact-container'>
					<h1>Contactos</h1>
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
					<div className='contact-button'>
						<button className='button-55' role='button'>
							ENVIAR
						</button>
					</div>
					<div className='contact-or-email'>
						<p>ou</p>
					</div>
					<div className='contact-alternatives'>
						<p>Tel: +351 123 456 789</p>
						<p>Tel: +351 123 456 789</p>
						<p>tlup@tlup.pt</p>
					</div>
				</div>
			</section>
			
		</div>
	);
}

export default Contact;
