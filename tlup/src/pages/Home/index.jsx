import './index.css';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Transition from '../../sections/Transition';
import Works from '../../sections/Works';

function Home() {
	return (
		<div className='bg'>
			<NavBar />
			<About />
			<Transition />
			<Works />
			<Contact />
		</div>
	);
}

export default Home;
