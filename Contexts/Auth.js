import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext)
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}