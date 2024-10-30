import './index.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
function Footer() {
	return (
		<div>
			<footer>
				<div className='content'>
					<div className='logo-links'>
						<div className='logo'>
							<img src='./images/tlup-logo.png' alt='' />
						</div>
						<div className='links'>
							<a href='https://www.instagram.com/tiralaumapic' target='_blank' rel='noopener noreferrer'>
								<FaInstagram size={20} />
							</a>
							<a href='https://www.youtube.com/tiralaumapic' target='_blank' rel='noopener noreferrer'>
								<FaYoutube size={20} />
							</a>
						</div>
					</div>
					<div className='footer-contacts'>
						<h4>Contactos</h4>
						<p>Tel: +351 123 456 789</p>
						<p>Mob: +351 123 456 789</p>
						<p>tlup@tlup.pt</p>
					</div>
				</div>
				<div className='copyright'>
					<p>TLUP © 2024 - All rights reserved</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
