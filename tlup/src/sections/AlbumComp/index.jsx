import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AlbumComp() {
	const { documentId } = useParams();
	const [album, setAlbum] = useState(null);

	useEffect(() => {
		const API_BASE_URL = 'http://admin.tlup.pt/api';
		const fetchAlbum = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/albums/${documentId}?populate=*`);
				console.log(response.data); // Log para verificar a estrutura dos dados
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
			<h1>{album ? album.data.nome : 'Carregando...'}</h1>

			{/* Verificar se existe fotos e se é uma lista */}
			{album && album.data.fotos ? album.data.fotos.map((foto, index) => <img key={index} src={`http://admin.tlup.pt${foto.url}`} alt={`foto-${index}`} />) : <p>Sem fotos disponíveis.</p>}
		</div>
	);
}

export default AlbumComp;
