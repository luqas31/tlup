import './index.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Transition() {
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

	return (
		<>
			<img className='transition reveal-section' src='/images/tlup-transition.jpg' alt='' />
		</>
	);
}

export default Transition;
