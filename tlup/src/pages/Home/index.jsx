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
			<NavBar />
			<main>
				<About />
				<Transition />
				<Works />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
