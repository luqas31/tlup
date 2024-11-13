import React from 'react';
import './index.css';

function PortfolioSection() {
	return (
		<>
			<section className=''>
				<div className='section-bg' id='pfolio'>
					<div className='section-title'>
						<h2>Portfólio</h2>
					</div>
					<div className='pfolio-filter'>
						<button className='filter-item'>Tudo</button>
						<button className='filter-item'>Videoclips</button>
						<button className='filter-item'>Fotografia</button>
						<button className='filter-item'>Animação</button>
					</div>
					<div className='section-content'>
						{/* http://admin.tlup.pt/api/albums?populate=* http://admin.tlup.pt/api/categorias?populate=* */}
						<div className='pfolio-grid'>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 1</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 2</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 3</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 4</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 5</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 6</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 7</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 8</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 9</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 10</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 11</h3>
							</div>
							<div className='pfolio-item'>
								<img src='https://fakeimg.pl/500x500/cccccc/909090' alt='' />
								<h3>Item 12</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PortfolioSection;
