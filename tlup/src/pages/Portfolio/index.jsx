import React from 'react';
import PortfolioSection from '../../sections/Portfolio';
import Header from '../../components/NavBar';
import Footer from '../../components/Footer';

function Portfolio() {
	return (
		<div>
			<Header />
			<main>
				<PortfolioSection />
			</main>
			<Footer />
		</div>
	);
}

export default Portfolio;
