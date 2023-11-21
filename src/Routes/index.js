import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/profile', element: <Profile /> },
				{ path: '/project', element: <Project /> },
				{ path: '/learn', element: <Learn /> },
				{ path: '/storebat', element: <StoreBat /> },
				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to='/404' replace /> },
			],
		},
		{ path: '*', element: <Navigate to='/404' replace /> },
	]);
}

//Pages
const Home = lazy(() => import('../page/Home'));

const Profile = lazy(() => import('../page/Profile'));

const Project = lazy(() => import('../page/Project'));

const Learn = lazy(() => import('../page/Learn'));

const StoreBat = lazy(() => import('../page/StoreBat'));

const Page404 = lazy(() => import('../page/Page404'));
