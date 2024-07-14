import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './pages/create-trip';
import TripDetails from './pages/trip-details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateTrip />,
    },
    {
        path: '/trips/:tripId',
        element: <TripDetails />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
