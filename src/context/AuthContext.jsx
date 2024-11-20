import { createContext, useContext, useState } from "react";

const fetchBackend = user => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(user);
        },1000);
    })
}

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const login = async (userInput) => {
            // fetch backend call
            const user = await fetchBackend(userInput);
            setUsername(user);
            setIsLogin(true);
    }

    return <AuthContext.Provider value={{username,setUsername,isLogin,setIsLogin,login}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => useContext(AuthContext);