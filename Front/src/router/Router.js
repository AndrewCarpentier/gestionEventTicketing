import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            index: true,
            element: <Homepage/>
        },
        {
            path: '/signin',
            element: <Signin/>
        },
        {
            path: '/signup',
            element: <Signup/>
        }
    ]

}])