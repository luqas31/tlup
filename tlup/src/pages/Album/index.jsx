import Footer from '../../components/Footer';
import Header from '../../components/NavBar';
import AlbumComp from '../../sections/AlbumComp';

function Album() {
	return (
		<div>
			<Header />
			<main>
				<AlbumComp />
			</main>
			<Footer />
		</div>
	);
}

export default Album;
