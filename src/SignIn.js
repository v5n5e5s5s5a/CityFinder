import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { FirebaseaApp } from 'firebase/app';
import { TextInput, Icon } from 'react-native-paper';
import { firebaseaAuth } from '../FirebaseConfig';
import FlashMessage from 'react-native-flash-message';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { CommonActions } from '@react-navigation/native';

export const SignIn = ({ route, navigation }) => {
    const { handleSignIn, isLoggedIn } = useContext(ChangeIntoDarkModa)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [security, setSecurity] = useState(true);

// Firestore initialize:
const firestore = getFirestore();



    useEffect(() => {
        const { email: routeEmail, password: routePassword } = route.params || {};
        if (routeEmail && routePassword) {
            setEmail(routeEmail);
            setPassword(routePassword);
        }
    }, [route.params]);

    const auth = firebaseaAuth;

    const validateForm = () => {
        let valid = true;
        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format');
            valid = false;
        } else {
            setEmailError('');
        }
        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required');
            valid = false;
        } else {
            setPasswordError('');
        }
        return valid;
    };
    const data = {
        email: email,
        password: password,
    }
    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
                console.log('You are now signed in');

                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                    })
                );
                await AsyncStorage.setItem('user-data', JSON.stringify(data))
            } catch (error) {
                console.log(error);
                showMessage({
                    message: 'incorrect',
                    type: 'danger',
                });
            }

        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            showMessage({
                message: 'Password reset email sent',
                type: 'success',
            });
        } catch (error) {
            console.log(error);
            showMessage({
                message: error.code,
                type: 'danger',
            });
        }
    };


 // Function to save user data to Firestore
 const saveUserDataToFirestore = async (user) => {
    try {
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        lastLoggedIn: new Date()
      });
      console.log('User data saved to Firestore');
    } catch (error) {
      console.error('Error saving user data to Firestore', error);
    }
  };


    return (
        <View>
            <FlashMessage position="top" />
            <ImageBackground
                source={require('../assets/Images/image3.jpeg')}
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
            />
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <View style={{ justifyContent: 'center', paddingTop: 100, paddingHorizontal: 20, paddingBottom: 60 }}>
                    <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Login</Text>
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
                        color="gray"
                        error={!!emailError}
                        value={email}
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
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', textAlign: 'right' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 50, borderRadius: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#ED5667' }} onPress={handleSubmit}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, padding: 10 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 70, display: 'flex', flexDirection: 'row', paddingLeft: 50 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#ED5667', fontSize: 18, textAlign: 'center' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
});
