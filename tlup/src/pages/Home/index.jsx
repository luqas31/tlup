import './index.css';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';

function Home() {
	return (
		<div className='bg'>
			<About />
			<Contact />
		</div>
	);
}

export default Home;
