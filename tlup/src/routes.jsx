import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AlbumComp from './sections/AlbumComp';

export const router = createBrowserRouter([
	{
		path: '/',
		component: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/portfolio',
				element: <Portfolio />,
			},
			{
				path: '/portfolio/:documentId',
				element: <AlbumComp />,
			},
		],
	},
]);
