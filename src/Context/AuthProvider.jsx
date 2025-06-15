import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        loading,
        user,
        setUser,
        createUserWithEmail,
        loginUserWithEmail,
        googleLogin,
        updateUser,
        logOut


    }

    return (
        <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;