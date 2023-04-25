import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import {userLoader} from '../loaders/userLoader';
import ProtectedRoutesAuth from '../protectedRoutes/ProtectedRouteAuth';
 
export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    loader: userLoader,
    children: [
        {
            index: true,
            element: <Homepage/>
        },
        {
            path: '/signin',
            element: <ProtectedRoutesAuth><Signin/></ProtectedRoutesAuth>
        },
        {
            path: '/signup',
            element: <ProtectedRoutesAuth><Signup/></ProtectedRoutesAuth>
        }
    ]

}])