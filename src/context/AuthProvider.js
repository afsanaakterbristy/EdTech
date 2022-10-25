import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user={displayName:'afsa'}
    

    const authInfo={user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;