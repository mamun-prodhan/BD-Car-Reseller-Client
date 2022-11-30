import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // email password signup
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email password signin
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo);
    }

    // logout
    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
        });
        return()=>unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;