import React, { useState } from "react";

const AuthContext = React.createContext({});

function AuthProvider(props) {
    const isLogin = localStorage.getItem("login");
    const [login, setLogin] = useState(isLogin);

    return (
        <AuthContext.Provider value={{login, setLogin}} >
            {props.children}
        </AuthContext.Provider>
    ) 
}

export { AuthContext, AuthProvider };