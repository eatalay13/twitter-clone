import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layouts/main';
import Explore from '~/pages/explore';
import Home from '~/pages/home';
import Notifications from '~/pages/notifications';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/explore',
                element: <Explore />,
            },
            {
                path: '/notications',
                element: <Notifications />,
            },
            {
                path: '*',
                element: <div>404</div>,
            }
        ],
    }
]);

export default routes;