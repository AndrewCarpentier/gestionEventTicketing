import { Navigate } from "react-router-dom";

const { useContext } = require("react");
const { AuthContext } = require("../context/AuthContext");

function ProtectedRouteAdmin({children}){
    const {user} = useContext(AuthContext);
    return user.role === "admin" ? children : <Navigate to="/"/>
}

export default ProtectedRouteAdmin;