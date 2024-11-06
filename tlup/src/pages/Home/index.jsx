import './index.css';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Contact2 from '../../sections/Contact/contact';
import Transition from '../../sections/Transition';
import Works from '../../sections/Works';
import Footer from '../../components/Footer';

function Home() {
	return (
		<div className='bg'>
			<Helmet>
				<title>TLUP | Produtora Audiovisual</title>
				<meta
					name='description'
					content='Transformamos ideias em experiências audiovisuais memoráveis. Nossa empresa de produção audiovisual oferece serviços de filmagem, edição, animação e criação de conteúdo para empresas, eventos e campanhas publicitárias. Explore nossa paixão pela narrativa visual e leve sua comunicação para o próximo nível.'
				/>
				<meta name='keywords' content='tlup, tiralaumapic, TLUP, TiraLaUmaPic, Produtora, Audiovisual, Lisboa, Videoclips, Fotografia'/>
			</Helmet>
			<NavBar />
			<main>
				<About />
				<Transition />
				<Works />
				<Contact2 />
				
		{/* 	
				<Contact /> */}
			</main>
			<Footer />
		</div>
	);
}

export default Home;
