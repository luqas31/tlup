import './index.css';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Transition from '../../sections/Transition';

function Home() {
	return (
		<div className='bg'>
			<NavBar />
			<About />
			<Transition />
			<Contact />
		</div>
	);
}

export default Home;
