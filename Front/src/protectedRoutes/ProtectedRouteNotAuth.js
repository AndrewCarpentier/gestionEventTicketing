import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutesNotAuth({children}){
    const user = useContext(AuthContext);
    return user ? children : <Navigate to="/signin"/>;
};

export default ProtectedRoutesNotAuth;