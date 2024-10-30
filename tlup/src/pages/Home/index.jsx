import './index.css';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Transition from '../../sections/Transition';
import Works from '../../sections/Works';
import Footer from '../../components/Footer';

function Home() {
	return (
		<div className='bg'>
			<About />
			<Transition />
			<Works />
			<Contact />
			<Footer/>
		</div>
	);
}

export default Home;
