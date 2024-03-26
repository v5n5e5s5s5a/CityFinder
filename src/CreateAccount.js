import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Dimensions, View } from 'react-native';
import { FirebaseaApp } from 'firebase/app';
import { TextInput, Icon } from 'react-native-paper';
import { firebaseaAuth } from '../FirebaseConfig';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import { getFirestore, doc, setDoc } from 'firebase/firestore';



export const CreateAccount = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('')

    //Firestore initialize:
    const firestore = getFirestore();

    const [security, setSecurity] = useState(true)

    const auth = firebaseaAuth

    const validateForm = () => {
        let valid = true
        //validate email
        if (!email.trim()) {
            setEmailError('Email is required')
            valid = false
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format')
            valid = false
        } else {
            setEmailError('')
        }
        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required')
            valid = false
        } else {
            setPasswordError('')
        }

        if (ConfirmPassword.trim() == '') {
            setConfirmPasswordError('ConfirmPassword is required')
            valid = false
        } else if (password !== ConfirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('')
        }

        return valid
    }

    const handleSignUp = async () => {
        if (validateForm()) {

            const data = {
                email: email,
                password: password
            }
            console.log(email)
            console.log(password)



            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)

                console.log(userCredential)
                console.log('you are now signUp')

                 // Save user data to Firestore
             await setDoc(doc(firestore, 'users', userCredential.user.uid), {
               email: userCredential.user.email,
              createdAt: new Date()
                }); 

                navigation.navigate('SignIn', { email, password })


            }

            catch (error) {
                console.log(error)
                showMessage({
                    message: error.code,
                    type: "danger",
                    icon: "info",
                    duration: 3000,
                })


            }

        }
    }
    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <View>
            <FlashMessage position="top" />
            <ImageBackground source={require('../assets/Images/image3.jpeg')}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: 900,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                }}
                resizeMode="cover"
            >
            </ImageBackground>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <View style={{ justifyContent: 'center', paddingTop: 100, paddingHorizontal: 20, paddingBottom: 60 }}>
                    <Text style={{ color: "white", fontSize: 30, textAlign: 'center' }}>Signup</Text>
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Text style={{ color: 'white', paddingBottom: 10 }}>Email</Text>
                    <TextInput
                        theme={{
                            colors: {
                                primary: '#ED5667'
                            }
                        }}
                        placeholder="Email Address"
                        error={!!emailError}
                        onChangeText={setEmail}
                    />
                    {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

                </View>
                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Text style={{ color: 'white', paddingBottom: 10 }}>Password</Text>
                    <TextInput
                        theme={{
                            colors: {
                                primary: '#ED5667'
                            }
                        }}
                        placeholder="Password"
                        secureTextEntry={security}
                        value={password}
                        onChangeText={setPassword}
                        color="gray"
                        error={!!passwordError}
                        right={<TextInput.Icon
                            icon={security ? 'eye-off' : 'eye'}
                            onPress={() => setSecurity(!security)}
                        />}
                    />
                    {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                </View>


                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Text style={{ color: 'white', paddingBottom: 10 }}>ConfirmPassword</Text>
                    <TextInput
                        theme={{
                            colors: {
                                primary: '#ED5667'
                            }
                        }}
                        placeholder="ConfirmPassword"
                        secureTextEntry={security}
                        value={ConfirmPassword}
                        onChangeText={setConfirmPassword}
                        color="gray"
                        error={!!ConfirmPasswordError}
                        right={<TextInput.Icon
                            icon={security ? 'eye-off' : 'eye'}
                            onPress={() => setSecurity(!security)}
                        />}
                    />
                    {ConfirmPasswordError ? <Text style={styles.error}>{ConfirmPasswordError}</Text> : null}
                </View>

                <View style={{ paddingHorizontal: 20, paddingTop: 50, borderRadius: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: "#ED5667" }} onPress={handleSignUp}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, padding: 10 }}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 70, display: 'flex', flexDirection: 'row', paddingLeft: 50 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Already have an account!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: "#ED5667", fontSize: 18, textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}



const styles = StyleSheet.create(
    {
        error: {
            color: 'red',
            fontSize: 14,
            marginTop: 5
        }

    }
)

