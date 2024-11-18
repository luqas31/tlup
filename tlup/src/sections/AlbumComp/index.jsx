import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function AlbumComp() {
	const { documentId } = useParams();
	const [album, setAlbum] = useState(null);

    const navigate = useNavigate();


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
						<h2>{album ? album.data.nome : 'Album desconhecido'}</h2>
					</div>
					<div className='pfolio-filter' id='voltar'>
						<button className='filter-item' onClick={() => navigate(-1)}>
							<FaArrowLeft style={{ marginRight: '8px' }} />
							Voltar a albums
						</button>
					</div>
					<div className='section-content'>
						<div className='pfolio-grid'>
							{album && album.data.fotos
								? album.data.fotos.map((foto, index) => (
										<div key={index} className='pfolio-item'>
											<img src={`http://admin.tlup.pt${foto.url}`} alt={`foto-${index}`} />
										</div>
								  ))
								: null}
							{album && album.data.videos.length > 0
								? album.data.videos.map((video, index) => (
										<div key={index} className='pfolio-item'>
											<iframe
												width='100%'
												height='100%'
												src={`https://www.youtube.com/embed/${video.link}`}
												title={`YouTube video player ${index}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
											></iframe>
										</div>
								  ))
								: null}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AlbumComp;
