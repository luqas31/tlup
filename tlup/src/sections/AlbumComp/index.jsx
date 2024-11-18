import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';

function AlbumComp() {
	const { documentId } = useParams();
	const [album, setAlbum] = useState(null);

	useEffect(() => {
		const API_BASE_URL = 'http://admin.tlup.pt/api';
		const fetchAlbum = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/albums/${documentId}?populate=*`);
				setAlbum(response.data);
			} catch (error) {
				console.error('Erro ao buscar álbum:', error);
			}
		};
		if (documentId) {
			fetchAlbum();
		}
	}, [documentId]);

	return (
		<div>
			<section className='album'>
				<div className='section-bg' id='pfolio'>
					<div className='section-title'>
						<h2>{album ? album.data.nome : 'Carregando...'}</h2>
					</div>
					<div className='pfolio-filter'>
						<button>Voltar</button>
					</div>
					<div className='section-content'>
						<div className='pfolio-grid'>
							{album && album.data.fotos ? (
								album.data.fotos.map((foto, index) => (
									<div key={index} className='pfolio-item'>
										<img src={`http://admin.tlup.pt${foto.url}`} alt={`foto-${index}`} />
									</div>
								))
							) : (
								<p>Sem fotos disponíveis.</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AlbumComp;
