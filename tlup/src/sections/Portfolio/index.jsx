import React from 'react';
import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PortfolioSection() {
	const [categories, setCategories] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const API_BASE_URL = 'http://admin.tlup.pt/api';

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/categorias?populate=*`);
				setCategories(response.data.data);
			} catch (error) {
				console.error('Erro ao buscar categorias:', error);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		const fetchAlbums = async () => {
			try {
				let url = `${API_BASE_URL}/albums?populate=*`;
				if (selectedCategory) {
					url += `&filters[categoria][id][$eq]=${selectedCategory}`;
				}
				const response = await axios.get(url);
				setAlbums(response.data.data);
			} catch (error) {
				console.error('Erro ao buscar álbuns:', error);
			}
		};
		fetchAlbums();
	}, [selectedCategory]);

	const handleCategoryClick = categoryId => {
		setSelectedCategory(categoryId);
	};

	return (
		<>
			<section className='pfolio'>
				<div className='section-bg' id='pfolio'>
					<div className='section-title'>
						<h2>Portfólio</h2>
					</div>
					<div className='pfolio-filter'>
						<button className='filter-item' onClick={() => handleCategoryClick(null)}>
							Tudo
						</button>
						{categories.map(category => (
							<button key={category.id} className='filter-item' onClick={() => handleCategoryClick(category.id)}>
								{category.nome}
							</button>
						))}
					</div>
					<div className='section-content'>
						<div className='pfolio-grid'>
							{albums.length > 0 ? (
								albums.map(album => (
									<div key={album.id} className='pfolio-item'>
										<Link to={`/portfolio/${album.documentId}`} className='a-album'>
											<img src={`http://admin.tlup.pt${album.capa.url}`} alt={album.nome} className='album-cover' />
											<h3>{album.nome}</h3>
										</Link>
									</div>
								))
							) : (
								<p>Nenhum álbum encontrado.</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PortfolioSection;
