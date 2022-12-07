import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../services/api";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['session']);

    const login = async (loginParams) => {
        api.post('/sessions/login', {user: loginParams})
            .then((res) => {
                const session = res.data

                setCookie('session', session, { path: '/' })
            }).catch(alert)
    };

    const logout = () => {
        removeCookie('session', { path: '/' })
        setUser(null)
    }

    useEffect(() => {
        if (cookies.session) {
            api.get(`/user/show/${cookies.session.id}`)
                .then((res) => {
                    setUser(res.data)
                }).catch(alert)
        }
    }, [cookies.session])

    return (
        <userContext.Provider value={{ user, login, logout }}>
            {children}
        </userContext.Provider>
    );
}


export const useUserContext = () => {
    const context = useContext(userContext);
    return context;
}