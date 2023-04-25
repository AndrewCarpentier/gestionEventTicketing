import { useLoaderData } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import { useState } from "react";
import {signin as login} from '../apis/Auth';
import {signout as logout} from '../apis/Auth';

function AuthProvider({children}){
    const [user, setUser] = useState(useLoaderData());
    console.log(user)

    async function signin(credential){
        setUser(await login(credential));
    }

    async function signout(){
        await logout();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, signin, signout}}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;