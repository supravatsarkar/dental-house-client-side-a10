import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirabase';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;