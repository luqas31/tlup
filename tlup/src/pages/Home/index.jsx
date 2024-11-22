import './index.css';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Transition from '../../sections/Transition';
import Works from '../../sections/Works';
import Footer from '../../components/Footer';
import Hero from '../../sections/Hero';

function Home() {
	return (
		<>
			<Helmet>
				<title>TLUP | Produtora Audiovisual</title>
				<meta
					name='description'
					content='Transformamos ideias em experiências audiovisuais memoráveis. Nossa empresa de produção audiovisual oferece serviços de filmagem, edição, animação e criação de conteúdo para empresas, eventos e campanhas publicitárias.'
				/>
				<meta name='keywords' content='tlup, tiralaumapic, TLUP, TiraLaUmaPic, Produtora, Audiovisual, Lisboa, Videoclips, Fotografia' />
			</Helmet>
			<NavBar />
			<main>
				<Hero />
				<About />
				<Works />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default Home;
