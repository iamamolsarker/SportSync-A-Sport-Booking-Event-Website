import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        loading,
        user,
        setUser,
        createUserWithEmail,
        loginUserWithEmail,
        googleLogin


    }

    return (
        <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;