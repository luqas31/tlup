import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

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
		],
	},
]);
