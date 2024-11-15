import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AlbumComp() {
	const { id } = useParams();
	const [album, setAlbum] = useState(null);

	useEffect(() => {
		axios
			.get(`http://admin.tlup.pt/api/fotos?populate=*`)
			.then(response => {
				setAlbum(response.data);
			})
			.catch(error => {
				console.error('Erro ao buscar os dados do álbum:', error);
			});
	}, [id]);

	console.log(album);

	return <div></div>;
}

export default AlbumComp;

