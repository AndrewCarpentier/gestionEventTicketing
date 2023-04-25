import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutesAuth({children}){
    const {user} = useContext(AuthContext);
    return user ? <Navigate to="/"/> : children;
};

export default ProtectedRoutesAuth;