import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "../api/axios";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signin = async (data) => {
        try{
            const res = await axios.post("/signin", data);
            setUser(res.data.user);
            setIsAuth(true);
            setErrors([]);
        return res.data;
        } catch (error) {
            console.log("Error en signin:", error);
            if(error.response){
                if(Array.isArray(error.response.data)){
                    return setErrors(error.response.data);
                }
                setErrors([error.response.data.message || error.response.data]);
            } else {
                setErrors(["Error de conexión con el servidor"]);
            }
        }
    };

    const signup = async (data) => {
        try{
            const res = await axios.post("/signup", data);
            setUser(res.data.user);
            setIsAuth(true);
            setErrors([]);
        return res.data;
        } catch (error) {
            console.log("Error en signup:", error);
            if(error.response){
                if(Array.isArray(error.response.data)){
                    return setErrors(error.response.data);
                }
                setErrors([error.response.data.message || error.response.data]);
            } else {
                setErrors(["Error de conexión con el servidor"]);
            }
        }
    };

    const signout = async() => {
        const res = await axios.post("/signout");
        setUser(null);
        setIsAuth(false);
        return res.data;
    }

    useEffect(() => {
        if (Cookie.get('token')) {
            axios.get("/profile").then((res) => {
                setUser(res.data);
                setIsAuth(true);
            }).catch((error) => {
                setUser(null);
                setIsAuth(false);
                console.log(error);
            })
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrors([]);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [errors]);


    return <AuthContext.Provider value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        errors,
        setErrors,
        loading,
        signup,
        signin,
        signout,
    }}>
        {children}
    </AuthContext.Provider>
}