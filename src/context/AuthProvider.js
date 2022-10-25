import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    //google
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider)
    }

    //use pass email
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)

    }

    //logout
    const logOut = () => {
        return signOut(auth);
    }


    //getting user
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
            console.log('done',currentUser);
            setUser(currentUser)
     });
        return () => {
            unsubscribe();
        }

    },[])

    const authInfo={user,providerLogin,logOut,createUser, signIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;