import './index.css';
import { useNavigate } from 'react-router-dom';

function Button() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/portfolio');
	};
	return (
		<div>
			<button className='button-17' role='button' onClick={handleClick}>
				Portfólio
			</button>
		</div>
	);
}

export default Button;
