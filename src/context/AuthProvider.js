import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    //google
    const providerLogin = (provider) => {
         setLoading(true);
        return signInWithPopup(auth,provider)
    }
     //github
    const providerGithub = (provider) => {
         setLoading(true);
        return signInWithPopup(auth,provider)
    }

    //use pass email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login
    const signIn = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)

    }
    //update photo name
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    //email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }


    //logout
    const logOut = () => {
         setLoading(true);
        return signOut(auth);
    }


    //getting user
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
         console.log('done', currentUser);
         if (currentUser==null|| currentUser.emailVerified) {
             setUser(currentUser);
             
         }
         setLoading(false)
     });
        return () => {
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        providerGithub,
        verifyEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;