import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    // const [auth, setAuth] = useState(() => {
    //     localStorage.removeItem('accessToken');
    //     // in case of browse refresh token will be deleted from react, but is still keep it in localStorage
    //     // due to reset in localStorage with removeItem

    //     return {};
    // });

// Persisted state auth?????
    const [auth, setAuth] = usePersistedState('auth', {});



    
const loginSubmitHandler = async (value) => {
    const result = await authService.login(value.email, value.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);

    console.log(result);
};

const registerSubmitHandler = async (value) => {
    const result = await authService.register( value.username, value.email, value.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
};


const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    
};

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
