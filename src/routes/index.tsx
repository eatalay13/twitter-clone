import Explore from '@/pages/explore';
import Home from '@/pages/home';
import Notifications from '@/pages/notifications';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
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
]);

export default routes;