import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUserWithEmail = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        loading,
        user,
        setUser,
        createUserWithEmail


    }

    return (
        <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;