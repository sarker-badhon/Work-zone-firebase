import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = ()=>{
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }
    const signInWithGitHub =()=>{
        return signInWithPopup(auth,gitHubProvider)
    }


    //observe auth state change
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('auth state change',currentUser);
        setUser(currentUser)
        setLoading()
        })
        return ()=>{
            unSubscribe(false);
        }
    },[])
    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        LogOut
    }

    return (
      
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
      
    );
};

export default AuthProvider;<h2>Auth Provider</h2>