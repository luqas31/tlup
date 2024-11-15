import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AlbumComp() {
	const { id } = useParams();
	const [fotos, setFotos] = useState([]);

	useEffect(() => {
		if (id) {
			axios
				.get(`http://admin.tlup.pt/api/albums/${id}?populate=*`)
				.then(response => {
					setFotos(response.data.data.fotos);
				})
				.catch(error => {
					console.error('Erro ao buscar fotos:', error);
				});
		}
	}, [id]);

	return (
		<div>
			<h1>Fotos do Álbum</h1>
			<div>
				{fotos.map(foto => (
					<img key={foto.id} src={foto.url} alt={foto.nome} />
				))}
			</div>
		</div>
	);
}

export default AlbumComp;
