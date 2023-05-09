import { useLoaderData } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import { useState } from "react";
import {getCurrentUser, signin as login} from '../apis/Auth';
import {signout as logout} from '../apis/Auth';

function AuthProvider({children}){
    const [user, setUser] = useState(useLoaderData());

    async function signin(credential){
        setUser(await login(credential));
    }

    async function signout(){
        await logout();
        setUser(null);
    }

    async function edit(){
        setUser(await getCurrentUser())
    }

    return(
        <AuthContext.Provider value={{user, signin, signout, edit}}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;