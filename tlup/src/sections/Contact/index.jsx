import React from 'react';
import './index.css';
import useFetchData from '../../hooks/useFetchData';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Contact() {
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

	const contact = data.contact[0];

	return (
		<>
			<section id='contact' className='works-section reveal-section'>
				<div className='section-bg'>
					<div className='section-title'>
						<h2>{contact.title}</h2>
					</div>
					<div className='section-content'>
						<div className='contact-content'>
							<div className='contact-name-email'>
								{contact.inputs.slice(0, 2).map(input => (
									<div className='input-container' key={input.id}>
										<input type='text' placeholder=' ' />
										<label>{input.label}</label>
									</div>
								))}
							</div>
							<div className='input-container contact-email'>
								<input type='email' placeholder=' ' />
								<label>{contact.inputs[2].label}</label>
							</div>
							<div className='input-container textarea-container contact-message'>
								<textarea placeholder=''></textarea>
								<label>{contact.inputs[3].label}</label>
							</div>
							<div className='contact-button'>
								<button className='submit-button'>
									<i className='fas fa-paper-plane'> </i> {contact.buttonText}
								</button>
							</div>
							<div className='contact-alternative'>
								<p>{contact.alternativeText}</p>
								<p>{contact.email}</p>
								<div className='contact-socials'>
									{contact.socials.map(social => (
										<a href={social.url} target='_blank' rel='noopener noreferrer' key={social.platform}>
											<i className={social.iconClass}></i>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
