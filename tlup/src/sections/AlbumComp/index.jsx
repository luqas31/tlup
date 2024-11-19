import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function AlbumComp() {
	const { documentId } = useParams();
	const [album, setAlbum] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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

	const openModal = index => {
		setCurrentPhotoIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const showPrevPhoto = () => {
		setCurrentPhotoIndex(prevIndex => (prevIndex === 0 ? album.data.fotos.length - 1 : prevIndex - 1));
	};

	const showNextPhoto = () => {
		setCurrentPhotoIndex(prevIndex => (prevIndex === album.data.fotos.length - 1 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				closeModal();
			} else if (event.key === 'ArrowLeft') {
				showPrevPhoto();
			} else if (event.key === 'ArrowRight') {
				showNextPhoto();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [album]);

	const handleClickOutside = event => {
		if (event.target.className === 'modal') {
			closeModal();
		}
	};

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
										<div key={index} className='pfolio-item' onClick={() => openModal(index)}>
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

			{isModalOpen && (
				<div className='modal' onClick={handleClickOutside}>
					<div className='modal-content'>
						<span className='close' onClick={closeModal}>
							&times;
						</span>
						<button className='prev' onClick={showPrevPhoto}>
							&#10094;
						</button>
						<img src={`http://admin.tlup.pt${album.data.fotos[currentPhotoIndex].url}`} alt={`foto-${currentPhotoIndex}`} />
						<button className='next' onClick={showNextPhoto}>
							&#10095;
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default AlbumComp;
