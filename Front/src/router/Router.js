import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            index: true,
            element: <Homepage/>
        }
    ]

}])