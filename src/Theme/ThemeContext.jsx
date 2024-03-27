import React, { useState, createContext } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { CommonActions } from '@react-navigation/native';
import { firebaseaApp, firebaseaAuth } from '../../FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ChangeIntoDarkModa = createContext()

export const ThemeProviderIntoDarkModa = ({ children }) => {
    const [dark, setDark] = useState(true)

    const changeIntoDark = () => {
        setDark((prev) => !prev)
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const auth = firebaseaAuth;
    
    const handleSignIn = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true)
            // console.log(response);
            console.log('You are now signed in');
            
        } catch (error) {
            console.log(error);
            showMessage({
                message: 'incorrect',
                type: 'danger',
            });
        }

    }

    return (
        <ChangeIntoDarkModa.Provider value={{ dark, changeIntoDark, handleSignIn, isLoggedIn}} >
            {children}
        </ChangeIntoDarkModa.Provider>
    );
}